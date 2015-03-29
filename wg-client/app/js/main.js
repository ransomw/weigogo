require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
		text: '../../bower_components/requirejs-text/text',
		blogParser: '../../blog_parser/blog',
    lodash: '../../bower_components/lodash/dist/lodash.min'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular']
	},
	priority: [
		"angular"
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'angularRoute',
	'controllers',
  'services'
], function(angular) {

	var APP_NAME = 'weigogo';

  angular.element(document).ready(function() {
		var interestsApp = angular.module(APP_NAME, [
			'ngRoute',
			APP_NAME+'.controllers',
      APP_NAME+'.services'
		]);

		interestsApp.config(
			['$routeProvider',
			 function($routeProvider) {
				 $routeProvider
					 .when('/home', {
						 templateUrl: 'app/partials/home.html',
						 controller: 'HomeCtrl'
					 })
					 .when('/trips', {
						 templateUrl: 'app/partials/trips.html',
						 controller: 'TripsCtrl'
					 })
           .when('/trip/:id', {
						 templateUrl: 'app/partials/trip.html',
						 controller: 'TripCtrl'
					 })
           .when('/signup', {
						 templateUrl: 'app/partials/signup.html',
						 controller: 'SignupCtrl'
					 })
           .when('/signin', {
						 templateUrl: 'app/partials/signin.html',
						 controller: 'SigninCtrl'
					 })
					 .otherwise({
						 redirectTo: '/home'
					 });
			 }]);

		angular.bootstrap(document, [APP_NAME]);
	});

});
