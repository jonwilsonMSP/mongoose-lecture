var mongoose = require('mongoose');
var express = require('express');
var employeeRouter = require('./routes/employee');
var index = require('./routes/index');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', index);
app.use('/emp', employeeRouter);

var db = mongoose.connect('mongodb://localhost/anyNameHere').connection;

db.once('open', function() {
  console.log('Connected to MongoDB');
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Address', server.address());
  console.log('Listening on port', port);
})
