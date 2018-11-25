'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    require: 'Please enter the name of the product'
  },
  price: {
    type: Number,
    require: 'Please enter a price'
  },
  weight: {
    type: Number,
    require: 'How much does the product weight?'
  },
  description: {
    type: String,
    require: 'Please enter description of the product'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Products', ProductSchema);
