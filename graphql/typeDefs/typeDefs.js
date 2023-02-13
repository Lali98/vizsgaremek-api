const {gql} = require('apollo-server');

module.exports = gql`
    #    type Recipe {
    #        _id: String!
    #        name: String!
    #        images: [String]
    #        createdAt: String!
    #        editedAt: String!
    #        description: String
    #        ingredients: [String]
    #        steps: [String]
    #        like: Int
    #        dislike: Int
    #        saved: Int
    #        comments: [String]
    #    }
    
    # Query
    type Query {
        recipe(id: ID!): Recipe
        getRecipe(name: String, amount: Int): [Recipe]
        user(userId: String!): User
    }
    
    # Mutation
    type Mutation {
        createRecipe(recipe: RecipeInput): Recipe!
        deleteRecipe(recipeId: ID!): Boolean
        editRecipe(editRecipe: RecipeInput, editId: ID!): Boolean
        addComment(comment: CommentInput, editId: String!): Boolean
        registerUser(registerInput: RegisterInput!): User
        loginUser(loginInput: LoginInput!): User
        deleteUser(deleteUserId: String!): Boolean
        editUser(editUser: UserInput!, editId: String!): Boolean
    }

    # Types
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
        comments: [Comment]
    }

    type User {
        _id: String
        username: String
        email: String
        password: String
        token: String
        role: Role
        recipesId: [String]
    }

    type Comment {
        user_id: String
        message: String
    }

    # Inputs
    input RecipeInput {
        name: String
        description: String
        images: [String]
        ingredients: [String]
        steps: [String]
    }

    input RegisterInput {
        username: String
        email: String
        password: String
        role: Role = user
    }

    input UserInput{
        username: String
        email: String
        password: String
        role: Role
    }

    input LoginInput {
        email: String
        password: String
    }

    input CommentInput {
        user_id: String
        message: String
    }

#    input Comment {
#        user_id: String,
#        message: String
#    }

    # Enum
    enum Role{
        user
        admin
    }
`;