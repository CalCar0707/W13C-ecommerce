const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags, including associated product data
  Tag.findAll({
    //throws error when onclude product data
    //include: [{model: Product}]
  }).then((tagData) => {
    res.json(tagData);
  });
 });

router.get('/:tag_id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      tag_id: req.params.tag_id,
    },
    //throws error when adding include
    //include: [{model: ProductTag}]
  }).then ((tagData) => res.json(tagData));
// be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_id: req.body.tag_id,
    tag_name: req.body.tag_name,
})
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:tag_id', (req, res) => {
  // update a tag's name by its `id` value, working properly
  Tag.update(req.body, {
    where: {
      tag_id: req.params.tag_id,   
     },
  })
  .then((updatedTag) => {
    res.json(updatedTag);
  })
  .catch((err) => res.json(err));
});

router.delete('/:tag_id', (req, res) => {
  // delete on tag by its `id` value, working properly
  Tag.destroy({
    where: {
      tag_id:req.params.tag_id,
    },
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
