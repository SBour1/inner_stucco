const { menuItems } = require('../models');

const menuItemsdata =[
  {
    'name': 'Chicken Wings',
    'price': 10.99,
    'category_id': 1,
    'hasMeat': true,
    'hasNuts': false,
    'filename': 'wings.jpg',
    'description': 'Chicken wing drums and flats, deep fried and tossed in a spicy buffalo sauce.'
  },
  {
    'name': 'Garlic Knots',
    'price': 5.59,
    'category_id': 1,
    'hasMeat': false,
    'hasNuts': false,
    'filename': 'garlicknots.jpg',
    'description': 'Bread tied in knots and baked covered in a butter garlic and parsley spread.'
  },
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
const seedmenuItems = () => menuItems.bulkCreate(menuItemsdata);

module.exports = seedmenuItems;
