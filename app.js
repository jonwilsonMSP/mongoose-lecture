var mongoose = require('mongoose');
var Employee = require('./employee');

var db = mongoose.connect('mongodb://localhost/anyNameHere').connection;

db.once('open', function() {
  console.log('Connected to MongoDB');
});

//Part 1
var joel = new Employee({
  firstName: 'Joel',
  salary: 1800,
  isManagement: false,
  hireDate: new Date(),
  location: 'B-E-A-U-tiful Bloomington, Minnesota',
  extras: {
    comments: 'bad personal hygiene'
  }
});

//Part 2
joel.save(function(err){
  if(err) {
    console.log('Save err', err);
  }
});


Employee.create({firstName: 'Ryan', salary: 3600, isManagement: true, hireDate: new Date(), location: 'Apple Valley, Minnesota', extras: {comments: 'good personal hygiene'}}, function(err){
  if(err){
    console.log('Create error', err);
  } else {
    console.log('Saved successfully');
  }
});

Employee.find({firstName: 'Joel', salary: 1800}, function(err, employees){
  if(err){
    console.log('Find error', err);
  } else {
    console.log(employees);
  }
})
