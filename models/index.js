const user = require('./user');
const Category = require('./Category');
const menuItems = require('./menuItems');
const Apetizer = require('./Apetizer');
const Cart = require('./Order');

Category.hasMany(menuItems, {
    foreignKey: 'category_id',
  });

  menuItems.belongsTo(Category, {
    foreignKey: 'category_id',
  });

Cart.belongsTo(user);

Cart.belongsTo(menuItems);

menuItems.hasMany(Cart);

user.hasMany(Cart);

module.exports = { user, Category, menuItems, Cart, Apetizer};
