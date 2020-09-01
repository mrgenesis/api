// modulo usado para enviar a vificação para os servidores do Google
const fetch = require('isomorphic-fetch')

  // esta é a url base para verificar o token enviado do front
  // https://developers.google.com/recaptcha/docs/verify#api_request
  , url = 'https://www.google.com/recaptcha/api/siteverify?';



// este módulo deve ser invocado pelas funções que precisarem fazer veficações
// retorna uma função que precisa do token gerado no front
// se der tudo certo, o objeto retornado terá as seguintes propriedades:
//{
//   success: true,
//   challenge_ts: '2020-08-31T19:51:58Z',
//   hostname: 'localhost',
//   score: 0.9,
//   action: 'submit'
 //}
// para mais informações sobre configurações e erros:
// https://developers.google.com/recaptcha/docs/v3#site_verify_response
// Erros: https://developers.google.com/recaptcha/docs/verify#error_code_reference
module.exports = ({ secret, tokenRecaptcha }) => new Promise((resolve, reject) => {
  const uri = `${url}secret=${secret}&response=${tokenRecaptcha}`;

    fetch(uri, {
      method: 'post'
    })
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(err => {
      reject(err)
    });
});