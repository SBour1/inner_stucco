const { Dessert } = require('../models');

const dessertdata = [
  {
    'name': 'Cheesecake',
    'price': 3.59,
    'category_id': 3,
    'hasMeat': false,
    'hasNuts': false,
    'filename': 'cheesecake.jpg',
    'description': 'A savory slice of cheesecake topped with whipped cream, strawberries, and a strawberry sauce.'
  },
  {
    'name': 'Pistacio Cannoli',
    'price': 4.99,
    'category_id': 3,
    'hasMeat': false,
    'hasNuts': true,
    'filename': 'cannoli.jpg',
    'description': 'A large italian cannoli filled with pistacio flavored cream and garnished with crushed pistacios.'
  },
];
const seedDessert= () => Dessert.bulkCreate(dessertdata);

module.exports = seedDessert;