const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories, including associated products
  Category.findAll({
    include: [{model: Product}]
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

//finds category by category_id, including associated products
router.get('/:category_id', (req, res) => {
    Category.findOne({
      where: {
        category_id: req.params.category_id,
      },
      include: [{model: Product}]
    }).then ((categoryData) => res.json(categoryData));
  });
  

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

//working properly to update by category_id provided in request parameters
router.put('/:category_id', (req, res) => {
  Category.update(req.body, {
      where: {
        category_id: req.params.category_id,
      },
    }
  )
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

//working properly to delete by category_id
router.delete('/:category_id', (req, res) => {

  Category.destroy({
    where: {
      category_id: req.params.category_id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
