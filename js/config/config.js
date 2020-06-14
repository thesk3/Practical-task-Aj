
	var myApp = angular.module('games', ['ui.router','datatables','LocalStorageModule','ui.bootstrap','ngCookies', 'ngMaterial']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider, $mdDateLocaleProvider) {
		
		// display date in particular formate
		$mdDateLocaleProvider.formatDate = function(date) {
			return date ? moment(date).format('dd-MMM-yyyy') : null;
		};
	
		$urlRouterProvider.otherwise('/login');

		
		
		$stateProvider

			// route for the Login page
            .state('login', {
				url : '/login',
				templateUrl : 'views/login.html',
				controller  : 'control'
			})	
			.state('home', {
				url : '/home',
				templateUrl : 'views/home.html',
				controller  : 'control'
			})	
			
	});

