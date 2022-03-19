const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedmenuItems = require('./menuItemsData');
const seedCart = require('./cartData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedmenuItems();

  await seedCart();

  process.exit(0);
};

seedAll();
