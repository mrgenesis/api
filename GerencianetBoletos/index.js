const Gerencianet = require('gn-api-sdk-node');
const dataVerify = require('./dataVerify');
const configBankingBillet = require('./configBankingBillet');

module.exports = async function (context, req) {

  //TODO if (recaptcha(req.body))
  let { postInfo } = req.body;
  if (dataVerify.all(postInfo.customer)) {
    postInfo.product.value = dataVerify.value(postInfo.product.value);
    let { options, paymentBody } = configBankingBillet(postInfo);
    
    gn = new Gerencianet(options);

    await gn.oneStep({}, paymentBody)
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
  }

  context.res = {
    status: 501,
    body: { Error: 'Não foi possível criar seu boleto.' }
  }
  

}