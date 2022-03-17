const User = require('./user');
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

Cart.belongsTo(User);

Cart.belongsTo(menuItems);

menuItems.hasMany(Cart);

User.hasMany(Cart);

module.exports = { User, Category, menuItems, Cart, Apetizer};
