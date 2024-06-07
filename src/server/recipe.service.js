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

module.exports = {
  getRecipes
};
