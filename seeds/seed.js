const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedmenuItems = require('./menuItemsData');
const userData = require('./userData.json');
const { user} = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await user.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedCategory();

  await seedmenuItems();

  process.exit(0);
};

seedAll();



// const sequelize = require("../config/connection");
// const { User, MenuItem } = require("../models");

// const userData = require("./userData.json");
// const menuData = require("./menuItems.json");

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await MenuItem.bulkCreate(menuData, {
//     individualHooks: true,
//     returning: true,
//   });

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();
