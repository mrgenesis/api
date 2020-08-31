// https://www.npmjs.com/package/mongodb
const { MongoClient } = require('mongodb');

module.exports = ({ dbUser, dbPass } = { dbUser: process.env.DB_USER, dbPass: process.env.DB_PASS }) => new Promise((resolve, reject) => {
  const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.sgjg9.azure.mongodb.net/?retryWrites=true&w=majority`;
  MongoClient.connect(uri, { useUnifiedTopology: true }, (error, client) => {
    error
    ? reject({
      info: 'Ocorreu uma falha ao tentar se conectar com o banco',
      error: error
    })
    : resolve(client)
  });
  console.log(uri);
});
