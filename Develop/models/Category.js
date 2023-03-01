//requiring objects from sequelize
const { Model, DataTypes } = require('sequelize');

//importing sequelize connection
const sequelize = require('../config/connection');

//Create a new Sequelize model for categories, category represents category table
class Category extends Model {}

Category.init(
  {
    // define columns
    category_id: {
      type: DataTypes.INTEGER,
      //throws error when add these
      //allowNull: false,
      //primaryKey: true,
      //autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  },
  {
    //link to database connection
    sequelize,
    //set to false to remove 'created_at' and 'updated_at' fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
