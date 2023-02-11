const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: { // id column
      type: DataTypes.INTEGER, // data will be an integer
      allowNull: false, // doesn't allow null values
      primaryKey: true, // setting as the primary key
      autoIncrement: true, // uses auto increment
    },
    category_name: { // column name
      type: DataTypes.STRING, // data will be a string
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
