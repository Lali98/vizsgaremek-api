const {gql} = require('apollo-server');

module.exports = gql`
    type User {
        fullName: [fullName]!
        username: String!
        email: String!
        password: String!
        token: String!
        role: Role!
    }
    
    enum Role{
        user
        admin
    }
    
    type fullName {
        firstName: String
        lastName: String
    }
`
