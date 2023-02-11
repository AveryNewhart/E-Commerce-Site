// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// the product has one category it belongs to.
Product.belongsTo(Category, {
  foreignKey: 'category_id', // set in the product.js route file. in the Product model.
  onDelete: 'CASCADE',
});

// Categories have many Products
// each category will have many products.
Category.hasMany(Product, {
  foreignKey: 'category_id', // set in the product.js route file. in the Product model.
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
// each product belongs to many tags
Product.belongsToMany(Tag, {
    through: ProductTag, // a model where the server must go to get data.
    foreignKey: 'product_id', // set in the ProductTag.js file. Defined in the model.
  })

// Tags belongToMany Products (through ProductTag)
// each tag belongs to many products
Tag.belongsToMany(Product, {
  through: ProductTag, // a model where the server must go to get data.
  foreignKey: 'tag_id', // set in the ProductTag.js file. Defined in the model.
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
