'use strict';
module.exports = function(app) {
  var productList = require('../controllers/productListController');

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  // todoList Routes
  app.route('/products')
    .get(productList.list_all_products)
    .post(productList.create_a_product);

  app.route('/products/:productId')
    .get(productList.read_a_product)
    .put(productList.update_a_product)
    .delete(productList.delete_a_product);
};
