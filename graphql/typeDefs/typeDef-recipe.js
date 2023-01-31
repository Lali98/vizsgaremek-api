const {gql} = require('apollo-server');

module.exports = gql`
    type Recipe {
        _id: String!
        name: String!
        images: [String]
        createdAt: String!
        editedAt: String!
        description: String
        ingredients: [String]
        steps: [String]
        like: Int
        dislike: Int
        saved: Int
        comments: [String]
    }
    input RecipeInput {
        name: String
        description: String
        images: [String] = []
        ingredients: [String] = []
        steps: [String] = []
        comments: [String] = []
    }

    type Query {
        recipe(id: ID!): Recipe
        getRecipe(name: String, amount: Int): [Recipe]
    }

    type Mutation {
        createRecipe(recipe: RecipeInput): Recipe!
        deleteRecipe(recipeId: ID!): Boolean
        editRecipe(editRecipe: RecipeInput, editId: ID!): Boolean
    }
`;