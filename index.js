const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const {typeDefs, resolvers} = require('./graphql/index')
const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(process.env.MONGODB_LINK, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connection successful');
        return server.listen({port: 9000});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })
