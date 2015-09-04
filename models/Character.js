var mongoose = require('mongoose');

// 1 - Declare a schema
var CharacterSchema = new mongoose.Schema({
  name: String,
  planet: String,
  forceUser: {type: Boolean, "default": false}
});

// //example
// var char = {
//   name: 'Luke Skywalker',
//   planet: 'Tatooine',
//   forceUser: true
// }


// 2 export our model
// mongoose.model('string name of model', schema)
module.exports = mongoose.model('Character', CharacterSchema);
