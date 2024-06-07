const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipeSchema = new Schema(
  {
    id:  { type: Number, required: true, unique: true },
    name: String,
    ingredients: [String],
    instructions: String
  },
  {
    collection: 'recipes',
    read: 'nearest'
  }
);
const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
