const { Pizza } = require('../models');

const pizzadata = [
  {
    'name': 'Meat Lover Pizza',
    'price': 18.99,
    'category_id': 2,
    'hasMeat': true,
    'hasNuts': false,
    'filename': 'meatloverpizza.jpg',
    'description': 'A large pizza covered with sausage, pepperoni, bacon, and chunks of hamburger.'
  },
  {
    'name': 'Cheese Pizza',
    'price': 14.99,
    'category_id': 2,
    'hasMeat': false,
    'hasNuts': false,
    'filename': 'cheesepizza.jpg',
    'description': 'A large pizza with nothing interesting on it. At all.'
  },
];
const seedPizza= () => Pizza.bulkCreate(pizzadata);

module.exports = seedPizza;