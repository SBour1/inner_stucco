const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedmenuItems = require('./menuItems');
const userData = require('./userData.json');
const { user} = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await user.bulkCreate(userData, {});

  await seedCategory();

  await seedmenuItems();

  process.exit(0);
};

seedAll();
