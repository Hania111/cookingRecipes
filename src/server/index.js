const cors = require('cors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');


const root = './';
const port = process.env.PORT || '3000';
const app = express();

// app.use(cors({
//   origin: 'http://localhost:4200', // lub "*" dla publicznego dostępu
//   optionsSuccessStatus: 200
// }));
app.use(cors({
  origin: ['https://recipes-app1.azurewebsites.net', 'http://localhost:4200'],
  optionsSuccessStatus: 200
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);
app.use(express.static(path.join(root, 'dist')));


app.get('*', (req, res) => {
  //res.sendFile('dist/index.html', {root: root});
  res.sendFile('dist/angular-test2/browser/index.html', {root: root});

});

app.listen(port, () => console.log(`API running on localhost:${port}`));
