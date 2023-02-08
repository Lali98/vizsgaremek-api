const {model, Schema} = require('mongoose');

const FelhasznalokSchema = new Schema({
    username: {type: String, default: null},
    email: {type: String, unique: true},
    password: String,
    token: String,
    role: {
        type: String,
        default: 'user'
    },
    recipesId: Array(String)
});

module.exports = model('user', FelhasznalokSchema);