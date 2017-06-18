var app = angular.module('bookApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl : '/views/home.html',
		controller : 'bookcontroller'
	}).when('/books/bookDetails/:id', {
		templateUrl : '/views/bookDetails.html',
		controller : 'bookcontroller'
	}).when('/books/updateBook/:id', {
		templateUrl : '/views/updateBook.html',
		controller : 'bookcontroller'
	}).when('/books/addBook', {
		templateUrl : '/views/addBook.html',
		controller : 'bookcontroller'
	}).otherwise({
		redirectTo : '/'
	});
	$locationProvider.html5Mode(true);
}]);