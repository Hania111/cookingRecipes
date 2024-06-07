const express = require('express');
const router = express.Router();
const recipeService = require('./recipe.service')

router.get('/recipes', (req, res) => {
  recipeService.getRecipes(req,res);
  //res.send(200, [
  // res.status(200).send([
  //   {
  //     "id" : "10",
  //     "name" : "Tea",
  //     "ingredients" : [
  //       "tea",
  //       "water"
  //     ],
  //     "instructions" : "Boil water and put tea"
  //   }
  // ]);

});

module.exports = router;
