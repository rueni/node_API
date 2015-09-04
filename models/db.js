var mongoose = require('mongoose');

// 1 - Build a connection string
var connectionString = 'mongodb://localhost/starwars';

// 2 - Make a connection
mongoose.connect(connectionString);

// 3 Listen for events and log changes
mongoose.connection.on('connected', function() {
  console.log('Mongoose has connected to : ' + connectionString);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose has disconnnected from : ' + connectionString);
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose has experienced an error: ' + error);
});
