'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  user: Number, // 1- technical 2, non-technical
  info: String, // description?
  type: String, // resevoir, 
  // active: Boolean, // keep?
  location: {
  	latitude: String,
  	longitude: String
  }
  // frequency: Number, // modify, this is a little up in the air
  // quality: {
  // 	color: String,
  // 	smell: String,
  // 	drinkable: Boolean
  // }
});

module.exports = mongoose.model('Thing', ThingSchema);