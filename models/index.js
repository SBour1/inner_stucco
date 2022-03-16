const user = require('./user');
const Category = require('./Category');
const menuItems = require('./menuItems');
const Cart = require('./Order');

Category.hasMany(menuItems);

menuItems.belongsTo(Category);

Cart.belongsTo(user);

Cart.belongsTo(menuItems);

menuItems.hasMany(Cart);

user.hasMany(Cart);

module.exports = { user, Category, menuItems, Cart };
