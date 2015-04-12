'use strict';

var _ = require('lodash');
var Typeofaccess = require('./typeofaccess.model');

// Get list of typeofaccesss
exports.index = function(req, res) {
  Typeofaccess.find(function (err, typeofaccess) {
    if(err) { return handleError(res, err); }
    return res.json(200, typeofaccess);
  });
};

// Get a single typeofaccess
exports.show = function(req, res) {
  Typeofaccess.findById(req.params.id, function (err, typeofaccess) {
    if(err) { return handleError(res, err); }
    if(!typeofaccess) { return res.send(404); }
    return res.json(typeofaccess);
  });
};

// Creates a new typeofaccess in the DB.
exports.create = function(req, res) {
  Typeofaccess.create(req.body, function(err, typeofaccess) {
    if(err) { return handleError(res, err); }
    return res.json(201, typeofaccess);
  });
};

// Updates an existing typeofaccess in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Typeofaccess.findById(req.params.id, function (err, typeofaccess) {
    if (err) { return handleError(res, err); }
    if(!typeofaccess) { return res.send(404); }
    var updated = _.merge(typeofaccess, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, typeofaccess);
    });
  });
};

// Deletes a typeofaccess from the DB.
exports.destroy = function(req, res) {
  Typeofaccess.findById(req.params.id, function (err, typeofaccess) {
    if(err) { return handleError(res, err); }
    if(!typeofaccess) { return res.send(404); }
    typeofaccess.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}