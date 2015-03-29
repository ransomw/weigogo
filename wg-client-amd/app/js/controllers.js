define(['angular'
], function (angular) {
  // todo put into constants module
  var APP_NAME = 'weigogo';

  var myAppControllers = angular.module(APP_NAME+'.controllers', []);

	myAppControllers.controller('HeaderCtrl', [
		'$scope', '$location', 'User',
		function HeaderCtrl($scope, $location, User) {
      $scope.$watch(
        function () { return User.current(); },
        function (newVal, oldVal) {
          if (newVal !== null) {
            $scope.signedIn = true;
          } else {
            $scope.signedIn = false;
          }
        });
			$scope.isActive = function (viewLocation) {
				return viewLocation === $location.path();
			};
		}]);


	myAppControllers.controller('HomeCtrl', [
		'$scope',
		function HomeCtrl($scope) {
      console.log("home ctrl");
		}]);

	myAppControllers.controller('SignupCtrl', [
		'$scope', 'User',
		function SignupCtrl($scope, User) {
      $scope.nameExists = false;
      $scope.add = function (userData) {
        var user = User.add(userData);
        if (user === null) {
          $scope.nameExists = true;
        }
        // $scope.addForm.$setPristine();
        $scope.user = {};
        $scope.nameExists = false;
      };
		}]);

	myAppControllers.controller('SigninCtrl', [
		'$scope', 'User',
		function SigninCtrl($scope, User) {
      $scope.badLogin = false;
      $scope.signin = function (userData) {
        var user = User.signin(userData);
        if (user === null) {
          $scope.badLogin = true;
        }
        $scope.user = {};
        $scope.badLogin = false;
      };
		}]);

  myAppControllers.controller('TripsCtrl', [
		'$scope', 'Trip',
		function TripsCtrl($scope, Trip) {
      console.log("trips ctrl");
      console.log(Trip);
      $scope.trips = Trip.all();
		}]);

  myAppControllers.controller('TripCtrl', [
		'$scope', '$routeParams', 'Trip', 'User',
		function TripsCtrl($scope, $routeParams, Trip, User) {
      var trip = Trip.get($routeParams.id);
      $scope.trip = trip;
      $scope.join = function () {
        Trip.addUser(trip, User.current());
      };
		}]);


});
