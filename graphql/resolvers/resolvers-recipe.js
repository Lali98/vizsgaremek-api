const Receptek = require('../../models/Receptek');

module.exports = {
    Query: {
        async recipe(_, {id}) {
            return await Receptek.findById(id);
        },
        async getRecipe(_, {name, amount}) {
            return await Receptek.find({name: {$regex: name ? name : '', $options: "i"}}).limit(amount);
        }
    },
    Mutation: {
        async createRecipe(_, {recipe: {name, description, images, ingredients, steps}}) {
            const createdRecipe = new Receptek({
                name: name,
                description: description,
                images: images,
                ingredients: ingredients,
                steps: steps,
                createdAt: new Date(),
                editedAt: new Date(),
                like: 0,
                dislike: 0,
                saved: 0,
                comments: []
            });
            const result = await createdRecipe.save();
            return {
                _id: result._id, ...result._doc
            }
        },
        async deleteRecipe(_, {recipeId}) {
            const res = await Receptek.deleteOne({_id: recipeId});
            return res.deletedCount;
        },
        async editRecipe(_, {editRecipe: {name, description, images, ingredients, steps}, editId}) {
            const result = await Receptek.updateOne({_id: editId}, {
                $set: {
                    name: name, description: description, editedAt: new Date()
                }, $push: {
                    images: images, ingredients: ingredients, steps: steps,
                }
            });
            return result.modifiedCount;
        },
        async addComment(_, {comment: {user_id, message}, editId}) {
            const result = await Receptek.findOneAndUpdate({_id: editId}, {
                $push: {
                    comments: {
                        user_id: user_id, message: message
                    }
                }
            });
            if (!result) {
                return false;
            }
            return true;
        }
    }
}