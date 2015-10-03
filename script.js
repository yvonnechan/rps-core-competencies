

// JavaScript Document

var app = angular.module('BonMod', ['ngRoute']);

app.config(
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'home.html',
				controller: 'HomeCtrl'
			}).
			when('/planning', {
				templateUrl: 'planning.html',
				controller: 'PlanningCtrl'
			}).
			when('/scoring', {
				templateUrl: 'scoring.html',
				controller: 'ScoringCtrl'
			}).
			otherwise ({
				redirectTo: '/'
			});	
	});

app.controller('HomeCtrl', function($scope, $http, FetchStandards) {
	//google : initialize js array of a certain value
	var config = {
		ki: [],
		st: [],
	};
	
	FetchStandards.StandardsList(function(lit){
		$scope.core = lit;
	});
	
	$scope.standardClicked = function(x, y) {
		config[y].push(x);
		console.log(y, x);
	}
});

app.controller('PlanningCtrl', function() {

});

app.controller('ScoringCtrl', function() {

});

app.factory('FetchStandards', function($http){
	var standardsConfig;
	
	return {
		//getting standards.json
		standardsList: function(callback){
			$http.get('standards.json').success(callback);
		},
		//saving what user clicked
		save: function(config) {
			standardsConfig = config;
		},
		//retrieving what user clicked
		retrieve: function() {
			return standardsConfig;
		},
		//getting details.json
		detailsList: function(callback){
			$http.get('details.json').success(callback);
		}
	}
});