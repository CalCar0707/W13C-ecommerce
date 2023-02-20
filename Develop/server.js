const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection.js');

//import models to sync table with database// initializing
const Category = require('./models/Category.js');
const Product = require('./models/Product.js');
const ProductTag = require('./models/ProductTag.js');
const Tag = require('./models/Tag.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  })
});
