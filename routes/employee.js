var router = require('express').Router();

var Employee = require('../models/employee');

router.get('/', function(request, response){
  Employee.find({}, function(err, employees){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(employees);
    }
  })
});

router.post('/createData', function(request, response){
  console.log('Creating data');
  var data = request.body;
  //Part 1
  var createdEmployee = new Employee({
    firstName: data.firstName,
    salary: data.salary,
    isManagement: data.isManagement,
    hireDate: new Date(),
    location: 'B-E-A-U-tiful Bloomington, Minnesota',
    extras: {
      comments: 'mad decent personal hygiene'
    }
  });

  //Part 2
  createdEmployee.save(function(err){
    if(err) {
      console.log('Save err', err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });

  // Employee.create({firstName: 'Connor', salary: 3600, isManagement: true, hireDate: new Date(), location: 'Apple Valley, Minnesota', extras: {comments: 'good personal hygiene'}}, function(err){
  //   if(err){
  //     console.log('Create error', err);
  //   } else {
  //     console.log('Saved successfully');
  //   }
  // });

  // response.sendStatus(200);
});


router.get('/connor', function(request, response){
  Employee.findOne({firstName: 'Connor'}, function(err, employees){
    if(err){
      console.log('Find error', err);
      response.sendStatus(500);
    } else {
      console.log(employees);
      response.send(employees);
    }
  })
});


router.get('/findWithId/:id', function(request, response){
  console.log(request.params.id);
  // response.sendStatus(200);

  Employee.findById(request.params.id, function(err, employee){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(employee);
    }
  })

});

router.put('/editWithId/:id/:name?', function(request, response){

  var id = request.params.id;
  var name = request.params.name;

  if(!name){
    name = 'Gnarles Barkly';
  }

  Employee.findById(request.params.id, function(err, employee){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {

      employee.firstName = name;

      employee.save(function(err){
        if(err){
          console.log('There was an issue saving', err);
          response.sendStatus(500);
        } else {
          console.log('Saved with no problems, sweet!');
          response.sendStatus(200);
        }
      });

    }
  })

});

router.delete('/removeWithId/:id', function(request, response){
  var id = request.params.id;

  Employee.findById(id, function(err, employee){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {

      employee.remove(function(err){
        if(err){
          console.log(err);
        }
      })

      console.log('User deleted');
      response.sendStatus(200);
    }
  })
});

module.exports = router;
