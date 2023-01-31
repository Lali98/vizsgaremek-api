const {model, Schema} = require('mongoose');

const FelhasznalokSchema = new Schema({
    fullname: Array(String),
    username: String,
    email: String,
    password: String,
    token: String,
    role: String
});

module.exports = model('user', FelhasznalokSchema);