const { Model, Datatypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class MenuItem extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

MenuItem.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    price: {
      type: Datatypes.DECIMAL,
      allowNull: false,
    },
    category: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    hasMeat: {
        type: Datatypes.BOOLEAN,
        allowNull: false
    },
    hasNuts: {
        type: Datatypes.BOOLEAN,
        allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menuItem'
  }
);

module.exports = MenuItem;