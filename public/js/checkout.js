const mailer = require('../../utils/mailer');
const checkout = document.querySelector('#checkout-btn');


function sendEmail(){
    mailer();
}

checkout.addEventListener('click', sendEmail );