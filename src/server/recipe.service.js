const Recipe = require('./recipe.model');

//require('./mongo').connect();
const mongo = require('./mongo');

// Połącz z bazą danych i następnie uruchom serwer lub API
mongo.connect().then(() => {
  console.log('Connected to database');
}).catch(error => {
  console.error('Connection error:', error);
});

function getRecipes(req, res) {
  const docquery = Recipe.find({});
  docquery
    .exec()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).send(error);
    });
}

// function getRecipes(req, res) {
//   Recipe.find({}, (error, recipes) => {
//     if (error) {
//       return res.status(500).send(error);
//     }
//     res.status(200).json(recipes);
//   });
// }

function postRecipe(req, res) {
  const originalRecipe = { id: req.body.id, name: req.body.name, photoUrl: req.body.photoUrl, instruction: req.body.instruction };
  const recipe = new Recipe(originalRecipe);
  console.log("aaa");
  // recipe.save(error => {
  //   if (checkServerError(res, error)) return;
  //   res.status(201).json(recipe);
  //   console.log('Recipe created successfully!');
  // });
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

module.exports = {
  getRecipes,
  postRecipe
};
