const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: { // column name
      type: DataTypes.INTEGER, // data is an integer
      allowNull: false, // doesn't accept null values
      primaryKey: true, // is the primary key
      autoIncrement: true, // allows auto increment 
    },
    product_id: { // column name, that will be used as a foreign key in the index.js model file
      type: DataTypes.INTEGER,
      references: { // refering to the Product model and getting the id column to be the key.
        model: 'product',
        key: 'id',
      },
    },
    tag_id: { // column name, that will be used as a foreign key in the index.js model file
      type: DataTypes.INTEGER,
      references: { // refering to the Product model and getting the id column to be the key.
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
