const user = require('./user');
const Category = require('./Category');
const menuItems = require('./menuItems');
const Order = require('./Order');

Category.hasMany(menuItems, {
  foreignKey: 'category_id',
});

menuItems.belongsTo(Category, {
  foreignKey: 'category_id',
});

Order.belongsTo(user, {
  foreignKey: 'user_id',
});

Order.hasMany(menuItems, {
  foreignKey: 'menu_id',
});

menuItems.belongsTo(Order, {
  foreignKey: 'menu_id',
});

module.exports = { user, Category, menuItems, Order };
