var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  firstName: String,
  salary: Number,
  isManagement: Boolean,
  hireDate: Date,
  location: String,
  extras: Object
})

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
