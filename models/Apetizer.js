const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Apetizer extends Model {}

Apetizer.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    hasMeat: {
      type: DataTypes.BOOLEAN,
      allowNull: false
  },
    hasNuts: {
      type: DataTypes.BOOLEAN,
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
    freezeTableName: true,
    underscored: true,
    modelName: 'apetizer',
  }
);

module.exports = Apetizer;
