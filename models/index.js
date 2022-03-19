const User = require('./user');
const Category = require('./Category');
const menuItems = require('./menuItems');
const Apetizer = require('./Apetizer');
const Cart = require('./Cart');

Category.hasMany(menuItems, {
  foreignKey: 'category_id',
});

menuItems.belongsTo(Category, {
  foreignKey: 'category_id',
});

Cart.belongsTo(User);

// Cart.belongsTo(menuItems);

Cart.hasMany(menuItems);

User.hasOne(Cart);

module.exports = { User, Category, menuItems, Cart, Apetizer};
