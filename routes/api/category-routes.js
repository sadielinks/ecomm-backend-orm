const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint - https://sequelize.org/master/manual/model-querying-finders.html
// **** these should display in insomnia

router.get('/', (req, res) => {
  // find all categories - findAll grabs from the whole db table
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_id', 'product_name', 'price', 'stock'],
      }
    ]
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value - findOne Student Act 6 - 'GET a 'single' x by its primary key'
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        include: {
          //Get product tag
          model: Tag,
          attributes: ['tag_name'],
          through: ProductTag,
        },
      }
    ]
  })
  // search db for id matching catagory and if nothing is found....
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: 'There is no category associated with this id, please try again.' });
        return;
      }
      res.json(categoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err)
      res.status(400).json(err)
    })
  });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({message: 'There is no category associated with this id, please try again.'})
      return;
    }
    res.json(categoryData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
