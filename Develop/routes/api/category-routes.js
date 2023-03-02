const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
  // be sure to include its associated Products

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  //works with find by pk or find one
  //Category.findByPk(req.params.id).then((categoryData) => {
    //res.json(categoryData);
    Category.findOne({
      where: {
        id: req.params.id,
      },
    }).then ((categoryData) => res.json(categoryData));
  });
  // be sure to include its associated Products
//});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    //insert info here
    // book example: get info from correlated model
    //title: req.body.title,
    //author: req.body.author,
    //is_paperback: true
  })
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

//working properly to update by category_id
router.put('/:category_id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
      where: {
        //gets the category based on the id given in the request parameters// 07 activity
        category_id: req.params.category_id,
      },
    }
  )
  //more in depth example on product-routes.js 
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

//working properly to delete by category_id
router.delete('/:category_id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      // add id value here
      category_id: req.params.category_id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
