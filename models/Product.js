// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: { // column name is id
      type: DataTypes.INTEGER, // data will be an integer
      allowNull: false, // will not accept null values
      primaryKey: true, // is the primary key
      autoIncrement: true, // it will auto increment 
    },
    product_name: { // column name
      type: DataTypes.STRING, // data will be a string
    },
    price: { // column name
      type: DataTypes.DECIMAL, // data will be a decimal
      allowNull: false,
      validate: { // checking to see if it is a decimal
        isDecimal: true
      }
    },
    stock: { // column name
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // setting the default value for it to start at.
      validate: { // checking to see if entry is a number
        isNumeric: true
      },
    },
    category_id: { // column name, this will be used as a foreign key in the index.js model file.
      type: DataTypes.INTEGER,
      references: { // refering to the Category model and getting the column name of id 
        model: 'category',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
