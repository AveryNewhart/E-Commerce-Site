const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 8877;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});



// http://localhost:8877/api/products    --get
// http://localhost:8877/api/products/2    --get
// http://localhost:8877/api/products     --post
/* {
"product_name": "Basketball",
"price": 200.00,
"stock": 3,
"tagIds": [1, 2, 3, 4]
} */
// http://localhost:8877/api/products/2     --put
/* {
"product_name": "Soccer",
"price": 200.00,
"stock": 3,
"tagIds": [1, 2, 3, 4]
} */
// http://localhost:8877/api/products/3     --delete


// http://localhost:8877/api/tags    --get
// http://localhost:8877/api/tags/2    --get
// http://localhost:8877/api/tags     --post
/* {
"tag_name": "test-tag-1" 
} */
// http://localhost:8877/api/tags/2     --put
/* {
"tag_name": "test-tag-2" 
} */
// http://localhost:8877/api/tags/3     --delete


// http://localhost:8877/api/categories    --get
// http://localhost:8877/api/categories/2    --get
// http://localhost:8877/api/categories     --post
/* {
"category_name": "test-cat-1" 
} */
// http://localhost:8877/api/categories/2     --put
/* {
"category_name": "test-cat-2" 
} */
// http://localhost:8877/api/categories/3     --delete
