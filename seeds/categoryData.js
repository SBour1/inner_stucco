/* eslint-disable quotes */
const { Category } = require("../models");

const categorydata = [
  {
    name: "Apetizers",
  },
  {
    name: "pizza",
  },
  {
    name: "Dessert",
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
