const moment = require('moment');
const settingPrice = require('./settingPrice');
const sandbox = process.env.ENVIRONMENT === 'sandbox';

function bankingBillet(user) {
  const options = {
    client_id: process.env.GN_ID,
    client_secret: process.env.GN_SECRET,
    sandbox: sandbox
  };
  const dueDate = moment().add(3, 'days').format('YYYY-MM-DD');
  const paymentBody = {
    payment: {
      banking_billet: {
        expire_at: dueDate,
        customer: {
            name: user.customer.name,
            cpf: user.customer.cpf,
            phone_number: user.customer.phone
        },
        configurations: {
            fine: 0,
            interest: 33
        }
      }
    },
    items: [{
        name: user.product.name || "Serviços de tecnologia",
        value: parseInt(settingPrice(user.product.value), 10),
        amount: user.product.amount ? parseInt(user.product.amount, 10) : 1
    }],
    shippings: [{
        name: 'Taxa para processar o pagamento.',
        value: 299
    }]
  };
  return { options, paymentBody };
}
module.exports = bankingBillet;