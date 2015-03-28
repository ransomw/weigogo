define(['angular',
        'services'
], function (angular) {
  // todo put into constants module
  var APP_NAME = 'weigogo';

  var myAppControllers = angular.module(APP_NAME+'.controllers', []);


	myAppControllers.controller('HeaderCtrl', [
		'$scope', '$location',
		function HeaderCtrl($scope, $location) {
			$scope.isActive = function (viewLocation) {
				return viewLocation === $location.path();
			};
		}]);


	myAppControllers.controller('HomeCtrl', [
		'$scope',
		function HomeCtrl($scope) {
      console.log("home ctrl");
		}]);


  myAppControllers.controller('TripsCtrl', [
		'$scope', 'Trip',
		function TripsCtrl($scope, Trip) {
      console.log("trips ctrl");
      console.log(Trip);
      $scope.trips = Trip.all();
		}]);


});
