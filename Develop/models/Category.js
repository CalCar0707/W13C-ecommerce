const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//Create a new Sequelize model for categories
class Category extends Model {}

Category.init(
  {
    // define columns
  },
  {
    //link to dtabase connection
    sequelize,
    //set to false to remove 'created_at' and 'updated_at' fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
