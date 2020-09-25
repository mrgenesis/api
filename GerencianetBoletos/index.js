const Gerencianet = require('gn-api-sdk-node');
const configBankingBillet = require('./configBankingBillet');

module.exports = async function (context, req) {

  let user = context.bindings.user;
  //TODO if (recaptcha(req.body))
  
  if (user) {
    
    const { options, paymentBody } = configBankingBillet(user)
      , gerencianet = new Gerencianet(options);

    await gerencianet.oneStep({}, paymentBody)
      .then((bankingBillet) => {
        context.res = {
          status: 201,
          body: bankingBillet
        }
      })
      .catch((err) => {
        context.res = {
          status: 501,
          body: { Error: 'Não foi possível criar seu boleto.', err }
        }
      });
      context.done();
  } else {

    context.res = {
      status: 501,
      body: { Error: 'Não foi possível criar seu boleto. Usuário não encontrado.' }
    }
  }
  

}