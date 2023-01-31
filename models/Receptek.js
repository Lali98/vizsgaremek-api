const {model, Schema} = require('mongoose');

const ReceptekSchema = new Schema({
    name: String,
    images: Array(String),
    createdAt: String,
    editedAt: String,
    description: String,
    ingredients: Array(String),
    steps: Array(String),
    like: Number,
    dislike: Number,
    saved: Number,
    comments: Array(String),
});

module.exports = model('recipe', ReceptekSchema);