const { SMTPClient } = require('emailjs');
// eslint-disable-next-line no-unused-vars
const { User } = require('../models');
require('dotenv').config();
function mailer () {
  const client = new SMTPClient({
    user: 'Stuccos Pizza',
    password: process.env.EMAIL_PW,
    host: 'smtp.stuccospizza@gmail.com',
    ssl: true,
  });
  try {
    client.send({
      text: 'Thanks for your order! It will be delivered in 30 minutes!',
      from: 'Stuccos Pizza <stuccospizza@gmail.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Receipt for your purchase',
    });
  } catch (err) {
    console.error(err);
  }
}
module.export = mailer;
