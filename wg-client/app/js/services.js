define(['angular'
], function (angular) {
  // todo put into constants module
  var APP_NAME = 'weigogo';

  var myAppServices = angular.module(APP_NAME+'.services', []);

  var TRIPS = [
    {
     'depart': 'jackson',
     'arrive': 'milan',
     'date': new Date()
    },
    {
     'depart': 'jackson',
     'arrive': 'paris',
     'date': new Date()
    }
  ];

  var Trip = function () {};
  Trip.prototype.all = function () {
    return TRIPS;
  };
  var trip = new Trip();


  myAppServices.factory('Trip', function () {
    return trip;
 });
});
