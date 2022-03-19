const {Cart} = require('../models');

const cartData = [];

const seedCart= () => Cart.bulkCreate(cartData);

module.exports = seedCart;