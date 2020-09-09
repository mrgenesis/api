// https://www.npmjs.com/package/mongodb
const { MongoClient } = require('mongodb');

// Por padrão, devem ser defidas no ambiente as variáveis para o user e db.
// Caso haja necessidade de conectar num banco diferente basta iformar nos parâmetros
// Isso é bom para fazer testes
module.exports = ({ dbUser, dbPass } = { dbUser: process.env.DB_USER, dbPass: process.env.DB_PASS }) => new Promise((resolve, reject) => {

  const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.sgjg9.azure.mongodb.net/?retryWrites=true&w=majority`;

  // se a conexão der certo, será retornado a variável client
  MongoClient.connect(uri, { useUnifiedTopology: true }, (error, client) => {

    // Se acontecer algum erro
    // retorna um obj de erro de conexão
    error
    ? reject({
      info: 'Ocorreu uma falha ao tentar se conectar com o banco',
      log: error
    })

    // a variável client é retornada caso ocorra tudo bem
    // exemplo de uso: 
    /*
    (async () => {
      const mongo = require('../shared/mongoClient');
      const client = await mongo();
      client.db(process.env.DB_NAME).collection('nameCollec').insertOne(obj);
    })()
    */
    : resolve(client)
  });

});
