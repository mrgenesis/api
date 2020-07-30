const moment = require('moment');

function bankingBillet(postInfo) {
  const options = {
    client_id: process.env.GN_ID,
    client_secret: process.env.GN_SECRET,
    sandbox: process.env.ENVIRONMENT
  };
  const dueDate = moment().add(3, 'days').format('YYYY-MM-DD');
  const paymentBody = {
    payment: {
      banking_billet: {
        expire_at: dueDate,
        customer: {
            name: postInfo.customer.name,
            cpf: postInfo.customer.cpf,
            phone_number: postInfo.customer.phone
        },
        configurations: {
            fine: 0,
            interest: 33
        }
      }
    },
    items: [{
        name: postInfo.product.name || "Serviços de tecnologia",
        value: parseInt(postInfo.product.value, 10),
        amount: postInfo.product.amount ? parseInt(postInfo.product.amount, 10) : 1
    }],
    shippings: [{
        name: 'Taxa para processar o pagamento.',
        value: 299
    }]
  };
  return { options, paymentBody };
}
module.exports = bankingBillet;