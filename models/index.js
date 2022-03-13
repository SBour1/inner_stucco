const user = require('./user');
const Category = require('./Category');
const menuItems = require('./menuItems');

Category.hasMany(menuItems, {
  foreignKey: 'category_id',
});

menuItems.belongsTo(Category, {
  foreignKey: 'category_id',
});

module.exports = { user, Category, menuItems };
