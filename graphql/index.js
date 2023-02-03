const recipeTypeDef = require('./typeDefs/typeDefs');
const recipeResolvers = require('./resolvers/resolvers-recipe');
const userResolvers = require('./resolvers/resolvers-user');

const typeDefs = {
    ...recipeTypeDef
}

const resolvers = {
    Query: {
        ...recipeResolvers.Query,
        ...userResolvers.Query
    },
    Mutation: {
        ...recipeResolvers.Mutation,
        ...userResolvers.Mutation
    }
}

module.exports = {typeDefs, resolvers}
