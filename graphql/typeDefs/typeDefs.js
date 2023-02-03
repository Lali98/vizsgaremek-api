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
        user(userId: String!): User
    }

    type Mutation {
        createRecipe(recipe: RecipeInput): Recipe!
        deleteRecipe(recipeId: ID!): Boolean
        editRecipe(editRecipe: RecipeInput, editId: ID!): Boolean
        registerUser(registerInput: RegisterInput!): User
        loginUser(loginInput: LoginInput!): User
        deleteUser(deleteUserId: String!): Boolean
        editUser(editUser: UserInput!): Boolean
    }

    type User {
        _id: String
        fullName: [fullName]
        username: String
        email: String
        password: String
        token: String
        role: Role
        recipesId: [String]
    }

    enum Role{
        user
        admin
    }

    type fullName {
        firstName: String
        lastName: String
    }

    input fullNameInput {
        firstName: String
        lastName: String
    }

    input RegisterInput {
        fullName: [fullNameInput]
        username: String
        email: String
        password: String
        role: Role = user
    }
    
    input UserInput{
        fullName: [fullNameInput]
        username: String
        email: String
        password: String
        role: Role = user
    }

    input LoginInput {
        email: String
        password: String
    }
`;