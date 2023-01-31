const recipeTypeDef = require('./typeDefs/typeDef-recipe');
const recipeResolvers = require('./resolvers/resolvers-recipe');

const typeDefs = {
    ...recipeTypeDef
}

const resolvers = {
    ...recipeResolvers
}

module.exports = {typeDefs, resolvers}
