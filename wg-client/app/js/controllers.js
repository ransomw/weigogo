define(['angular'
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
		'$scope',
		function TripsCtrl($scope) {
      console.log("trips ctrl");
		}]);


});
