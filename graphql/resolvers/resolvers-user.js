const User = require('../../models/Felhasznalok');
const {ApolloError} = require("apollo-server-errors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    Mutation: {
        async registerUser(_, {registerInput: {fullName: {firstName, lastName}, username, email, password}}) {
            const oldUser = await User.findOne({email});
            if (oldUser) {
                throw new ApolloError(`A user is already registered with the email "${email}".`, 'USER_ALREADY_REGISTERED');
            }
            let encryptedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                fullName: {firstName, lastName},
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
            });
            const token = jwt.sign(
                {user_id: newUser._id, email},
                "UNSAFE_STRING",
                {
                    expiresIn: '2h'
                }
            );
            newUser.token = token;
            const result = await newUser.save();
            return {
                _id: result._id,
                role: 'user',
                ...result._doc
            }
        },
        async loginUser(_, {loginInput: {email, password}}) {
            const user = await User.findOne({email});
            if (user && (await bcrypt.compare(password, user.password))) {
                const token = jwt.sign(
                    {user_id: user._id, email},
                    'UNSAFE_STRING',
                    {
                        expiresIn: '2h'
                    }
                );
                user.token = token;

                return {
                    _id: user._id,
                    ...user._doc
                }
            } else {
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
            }
        }
    },

    Query: {
        async user(_, {userId}) {
            return await User.findById(userId);
        }
    }
}