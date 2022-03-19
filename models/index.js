const User = require('./user');
const Category = require('./Category');
const menuItems = require('./menuItems');
const Cart = require('./Cart');

Category.hasMany(menuItems);

menuItems.belongsTo(Category);

Cart.belongsTo(User);

Cart.hasMany(menuItems);

User.hasOne(Cart);

module.exports = { User, Category, menuItems, Cart};
