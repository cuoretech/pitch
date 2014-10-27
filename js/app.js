	// the app module
	var mainApp = angular.module('mainApp', ['ngRoute', 'ngAnimate']);

	// configured routes
	mainApp.config(function($routeProvider) {
		$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/title.html',
			controller: 'mainController'
		})

		.when('/problem', {
			templateUrl: 'views/problem.html',
			controller: 'problemController'
		})

		.when('/solution', {
			templateUrl: 'views/solution.html',
			controller: 'solutionController'
		})

		.when('/model', {
			templateUrl: 'views/model.html',
			controller: 'modelController'
		})

		.when('/magic', {
			templateUrl: 'views/magic.html',
			controller: 'magicController'
		})

		.when('/market', {
			templateUrl: 'views/market.html',
			controller: 'marketController'
		})

		.when('/competition', {
			templateUrl: 'views/competition.html',
			controller: 'competitionController'
		})

		.when('/management', {
			templateUrl: 'views/management.html',
			controller: 'managementController'
		})

		.when('/financials', {
			templateUrl: 'views/financials.html',
			controller: 'financialsController'
		})

		.when('/status', {
			templateUrl: 'views/status.html',
			controller: 'statusController'
		})

		.when('/ask', {
			templateUrl: 'views/ask.html',
			controller: 'askController'
		});

	});

//controllers

	mainApp.controller('mainController', function($scope) {
		$scope.title = 'Welcome to Our Pitch!';
		$scope.slogan = 'Sync your World';
		$scope.pageClass = 'page-title';
	});

	mainApp.controller('problemController', function($scope) {
		$scope.title = 'Problem!';
		$scope.slogan = 'It\'s terrible!';
		$scope.pageClass = 'page-problem';
	});

	mainApp.controller('solutionController', function($scope) {
		$scope.title = 'Solution!';
		$scope.slogan = 'We\'re Great!';
		$scope.pageClass = 'page-solution';
	});

	mainApp.controller('modelController', function($scope) {
		$scope.title = 'Business model!';
		$scope.slogan = 'We make money :)';
		$scope.pageClass = 'page-model';
	});

	mainApp.controller('magicController', function($scope) {
		$scope.title = 'Mystical Technology';
		$scope.slogan = 'We have brown wizards! Brown power';
		$scope.pageClass = 'page-magic';
	});

	mainApp.controller('marketController', function($scope) {
		$scope.title = 'Target Market!';
		$scope.slogan = 'We have demand!';
		$scope.pageClass = 'page-market';
	});

	mainApp.controller('competitionController', function($scope) {
		$scope.title = 'Competition!';
		$scope.slogan = 'We\'re better!';
		$scope.pageClass = 'page-competition';
	});

	mainApp.controller('managementController', function($scope) {
		$scope.title = 'Top Dogs';
		$scope.slogan = 'They\'re pretty baller';
		$scope.pageClass = 'page-management';
	});

	mainApp.controller('financialsController', function($scope) {
		$scope.title = 'Financials';
		$scope.slogan = 'Bankroll';
		$scope.pageClass = 'page-financials';
	});

	mainApp.controller('statusController', function($scope) {
		$scope.title = 'Status';
		$scope.slogan = 'Moving along!';
		$scope.pageClass = 'page-status';
	});

	mainApp.controller('askController', function($scope) {
		$scope.title = 'Ask';
		$scope.slogan = 'You gonna help us?';
		$scope.pageClass = 'page-ask';
	});