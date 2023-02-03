const {model, Schema} = require('mongoose');

const FelhasznalokSchema = new Schema({
    fullname: Array(String),
    username: {type: String, default: null},
    email: {type: String, unique: true},
    password: String,
    token: String,
    role: String,
    recipesId: Array(String)
});

module.exports = model('user', FelhasznalokSchema);