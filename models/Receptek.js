const {model, Schema} = require('mongoose');

const ReceptekSchema = new Schema({
    name: String,
    images: Array(String),
    createdAt: String,
    editedAt: String,
    description: String,
    ingredients: Array(String),
    steps: Array(String), // ?
    like: Number,
    saved: Number,
    comments: Array(Object),
    createdUserId: String,
    categories: Array(String),
    tags: Array(String)
});

module.exports = model('recipe', ReceptekSchema);