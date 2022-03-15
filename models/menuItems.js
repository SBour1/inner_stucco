/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class menuItems extends Model {}

menuItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "menuItems",
  }
);

module.exports = menuItems;

// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class MenuItem extends Model {}

// MenuItem.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//     },
//     category: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     hasMeat: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     hasNuts: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: false,
//     },
//     filename: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "menuItem",
//   }
// );

// module.exports = MenuItem;
