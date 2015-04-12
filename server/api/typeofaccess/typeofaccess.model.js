'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TypeofaccessSchema = new Schema({
  name: String,
  url: String,
  active: Boolean
});

module.exports = mongoose.model('Typeofaccess', TypeofaccessSchema);