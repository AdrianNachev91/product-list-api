var express = require('express'),
  app = express(),
  port = process.env.PORT || 1337,
  mongoose = require('mongoose'),
  Product = require('./api/models/productListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Productdb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/productListRoutes');
routes(app); //register the routes

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('products list RESTful API server started on: ' + port);
