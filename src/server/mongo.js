const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/env');

// eslint-disable-next-line max-len
//const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;
const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.cosmosPort}/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@${env.dbName}@`;
//const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.mongo.cosmos.azure.com:${env.port}/${env.databaseName}?ssl=true`;
//const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`;
//const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`;
//const mongoUri = `mongodb://haniasaccount:${env.key}@haniasaccount.documents.azure.com:${env.cosmosPort}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@haniasaccount@`;
//const mongoUri = `mongodb://haniasaccount:<primary-key>@haniasaccount.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@haniasaccount@`
//const mongoUri = "mongodb://"+env.dbName+":"+env.cosmosPort+"/"+env.dbName+"?ssl=true& replicaSet=globaldb"

function connect() {
  return mongoose.connect(mongoUri);
}



// function connect() {
//   return mongoose.connect(mongoUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//     console.log("Connected to MongoDB");
//   }).catch(err => {
//     console.error("Connection error:", err);
//   });
// }


module.exports = {
  connect,
  mongoose
};
