var express = require('express');
var router = express.Router();

var charModel = require('../models/Character');
var bodyParser = require('body-parser');

// Restful API

// Get all
router.get('/', function(req, res, next) {
  charModel.find(function(error, characters) {
    if (error) return error;
    res.json(characters);
  })
});

// Get by id
router.get('/:id', function(req, res, next) {
  charModel.findById(req.params.id, function(error, character) {
    if (error) return error;
    res.json(character);
  })
});

// Create
router.post('/', function(req, res, next) {
  charModel.create(req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  })
});

// Update by id
router.put('/:id', function(req, res, next) {
  charModel.findByIdAndUpdate(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  })
});
router.patch('/:id', function(req, res, next) {
  charModel.findByIdAndUpdate(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  })
});

// Delete by id
router.delete('/:id', function(req, res, next) {
  charModel.findByIdAndRemove(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json({
      "Message": "User with an id of " + character.id + " has been removed."
    });
  })
});

module.exports = router;
