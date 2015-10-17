

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
		rb: [false, false, false],
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
	}
	$scope.planningClicked = function() {
		FetchStandards.save(selectedStandards);
	}
	
	
});

app.controller('PlanningCtrl', function($scope, $http, FetchStandards) {
	
	$scope.passed = FetchStandards.retrieve();
	//check if any of the reading subhead arrays contain true
	$scope.anyReading = function(){
		//if those arrays are !empty then returns a true for the ng-if 
		return !_.isEmpty(
							// _.compact returns array with all false/null values removed so this will return a true of ANY of the reading subhead arrays contain a true
							_.compact([].concat($scope.passed.ki, $scope.passed.cs, $scope.passed.ik, $scope.passed.rr))
							);
	}
	$scope.anyKI = function(){
		//if those arrays are !empty then returns a true for the ng-if 
		return !_.isEmpty(
							// _.compact returns array with all false/null values removed so this will return a true of ANY of the reading subhead arrays contain a true
							_.compact($scope.passed.ki)
							);
	}
	$scope.anyWriting = function(){
		return !_.isEmpty(
							_.compact([].concat($scope.passed.tt, $scope.passed.pd, $scope.passed.rb, $scope.passed.rw))
							);
	}
	$scope.anySpeakingListening = function(){
		return !_.isEmpty(
							_.compact([].concat($scope.passed.cc, $scope.passed.pk))
							);
	}
	$scope.anyLanguage = function(){
		return !_.isEmpty(
							_.compact([].concat($scope.passed.sl, $scope.passed.kl, $scope.passed.va))
							);
	}
	$scope.anyCreative = function(){
		return !_.isEmpty(
							_.compact([].concat($scope.passed.kn, $scope.passed.pr, $scope.passed.co))
							);
	}
	$scope.anyResponsibility = function(){
		return !_.isEmpty(
							_.compact([].concat($scope.passed.cr, $scope.passed.sr, $scope.passed.ir))
							);
	}
	
	Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
	}
		
	FetchStandards.getDetailsList(function(det){
		//everything in details.json into planningData 
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