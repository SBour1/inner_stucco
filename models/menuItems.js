/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class menuItems extends Model { }

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
    hasMeat: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    hasNuts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false

    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
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
