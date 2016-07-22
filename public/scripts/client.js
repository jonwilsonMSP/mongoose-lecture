angular.module('restApp', []);

angular.module('restApp').controller("RestController", function($http){
  var vm = this;

  vm.message = '10';

  vm.doAction = function(){
    console.log('Clicked');

    var sendData = {};

    sendData.firstName = vm.firstName;
    sendData.salary = vm.salary;
    sendData.isManagement = vm.isManagement;

    $http.post('/emp/createData', sendData).then(function(response){
      console.log(response);
    }, function(response){
      console.log('FAIL');
    })

    // function successHandle(){
    //
    // }
    // function failHandle(){
    //
    // }

    // $http.get('/emp').then(function(response){
    //   console.log('success', response);
    //   vm.employees = response.data;
    // }, function(response){
    //   console.log('err', response);
    // });


  }
})
