// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tag belongToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
  though: ProductTag,
  foreignKey: 'product_tag',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};