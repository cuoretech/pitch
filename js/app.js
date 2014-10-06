	// the app module
	var mainApp = angular.module('mainApp', ['ngRoute']);

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

	mainApp.controller('mainController', function($scope) {
		$scope.title = 'Welcome to Our Pitch!';
		$scope.slogan = 'Sync your World';
	});

	mainApp.controller('problemController', function($scope) {
		$scope.title = 'Problem!';
		$scope.slogan = 'It\'s terrible!';
	});

	mainApp.controller('solutionController', function($scope) {
		$scope.title = 'Solution!';
		$scope.slogan = 'We\'re Great!';
	});

	mainApp.controller('modelController', function($scope) {
		$scope.title = 'Business model!';
		$scope.slogan = 'We make money :)';
	});

	mainApp.controller('magicController', function($scope) {
		$scope.title = 'Mystical Technology';
		$scope.slogan = 'We have brown wizards! Brown power';
	});

	mainApp.controller('marketController', function($scope) {
		$scope.title = 'Target Market!';
		$scope.slogan = 'We have demand!';
	});

	mainApp.controller('competitionController', function($scope) {
		$scope.title = 'Competition!';
		$scope.slogan = 'We\'re better!';
	});

	mainApp.controller('managementController', function($scope) {
		$scope.title = 'Top Dogs';
		$scope.slogan = 'They\'re pretty baller';
	});

	mainApp.controller('financialsController', function($scope) {
		$scope.title = 'Financials';
		$scope.slogan = 'Bankroll';
	});

	mainApp.controller('statusController', function($scope) {
		$scope.title = 'Status';
		$scope.slogan = 'Moving along!';
	});

	mainApp.controller('askController', function($scope) {
		$scope.title = 'Ask';
		$scope.slogan = 'You gonna help us?';
	});