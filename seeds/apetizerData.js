const { Apetizer } = require('../models');

const apetizerdata = [
  {
    'name': 'Chicken Wings',
    'price': 10.99,
    'category_id': 1,
    'hasMeat': true,
    'hasNuts': false,
    'description': 'Chicken wing drums and flats, deep fried and tossed in a spicy buffalo sauce.'
  },
  {
    'name': 'Garlic Knots',
    'price': 5.59,
    'category_id': 2,
    'hasMeat': false,
    'hasNuts': false,
    'description': 'Bread tied in knots and baked covered in a butter garlic and parsley spread.'
  },
];
const seedApetizer= () => Apetizer.bulkCreate(apetizerdata);

module.exports = seedApetizer;