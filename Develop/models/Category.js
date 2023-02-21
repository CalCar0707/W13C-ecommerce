const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//Create a new Sequelize model for categories
class Category extends Model {}

Category.init(
  {
    // define columns
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
    },
    //products: {
      //type: DataTypes.STRING,
   // }

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
