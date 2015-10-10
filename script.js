

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
	var selectedStandards = {
		//reading
		ki: [false, false, false],
		cs: [false, false, false],
		ik: [false, false, false],
		rr: [false],
		//writing
		tt: [false, false, false],
		pd: [false, false, false],
		rd: [false, false, false],
		rw: [false],
		//speaking and listening
		cc: [false, false, false],
		pk: [false, false, false],
		//language
		sl: [false, false],
		kl: [false],
		va: [false, false, false],
		//creative problem solving
		kn: [false, false, false],
		pr: [false, false, false],
		co: [false, false],
		//responsibility
		cr: [false],
		sr: [false, false, false],
		ir: [false, false, false]
	};
	
	FetchStandards.getStandardsList(function(lit){
		$scope.core = lit;
	});
	
	$scope.standardClicked = function(key, index) {
		selectedStandards[key][index] = !selectedStandards[key][index];
		console.log(selectedStandards[key]);
		console.log(selectedStandards);
	}
	$scope.planningClicked = function() {
		FetchStandards.save(selectedStandards);
	}
	
	
});

app.controller('PlanningCtrl', function($scope, $http, FetchStandards) {
	
	var passed = FetchStandards.retrieve();
	console.log(passed);
		
	FetchStandards.getDetailsList(function(det){
		
		//everything in details.json
		$scope.planningData = det;
	});

});

app.controller('ScoringCtrl', function() {

});

app.factory('FetchStandards', function($http){
	var standardsPass;
	
	return {
		//getting standards.json
		getStandardsList: function(callback){
			$http.get('standards.json').success(callback);
		},
		//saving what user clicked
		save: function(selection) {
			standardsPass = selection;
			console.log("Saved standards object!:" + standardsPass);
		},
		//retrieving what user clicked
		retrieve: function() {
			return standardsPass;
		},
		//getting details.json
		getDetailsList: function(callback){
			$http.get('details.json').success(callback);
		}
	}
});