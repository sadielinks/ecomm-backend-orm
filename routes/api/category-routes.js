const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint - https://sequelize.org/master/manual/model-querying-finders.html
// **** these should display in insomnia

router.get('/', (req, res) => {
  // find all categories - findAll grabs from the whole db table
  // be sure to include its associated Products
  Category.findAll(
    {
      include: [ 
        {
          model: Product,
          attributes: ['product_name']
      }
    ]
    }
  )
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value - findByPk Student Act 6 - 'GET a 'single' x by its primary key'
  // be sure to include its associated Products
  

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
