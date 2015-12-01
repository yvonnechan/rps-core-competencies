

// JavaScript Document

var app = angular.module('BonMod', ['ngRoute']);

app.config(
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'html/home.html',
				controller: 'HomeCtrl'
			}).
			when('/planning', {
				templateUrl: 'html/planning.html',
				controller: 'PlanningCtrl'
			}).
			when('/scoring', {
				templateUrl: 'html/scoring.html',
				controller: 'ScoringCtrl'
			}).					
			otherwise ({
				redirectTo: '/'
			});	
	});

app.controller('HomeCtrl', function($scope, $http, FetchStandards) {

	//google : initialize js array of a certain value
	var initalConfig = {
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
	
	$scope.standardClicked =  function(key, index) {
		$scope.selectedStandards[key][index] = !$scope.selectedStandards[key][index];
	}

	
	$scope.navClicked = function() {
		FetchStandards.save($scope.selectedStandards);
	}

	$scope.anyClicked = function(){
		// if those arrays are empty then returns a true for the ng-if 
		// _.compact returns array with all false/null values removed so this will return a true of ANY of the reading subhead arrays contain a true
		return _.isEmpty(_.compact([].concat($scope.selectedStandards.ki, $scope.selectedStandards.cs, $scope.selectedStandards.ik, $scope.selectedStandards.rr, $scope.selectedStandards.tt, $scope.selectedStandards.pd, $scope.selectedStandards.rb, $scope.selectedStandards.rw, $scope.selectedStandards.cc, $scope.selectedStandards.pk, $scope.selectedStandards.sl, $scope.selectedStandards.kl, $scope.selectedStandards.va, $scope.selectedStandards.kn, $scope.selectedStandards.pr, $scope.selectedStandards.co, $scope.selectedStandards.cr, $scope.selectedStandards.sr, $scope.selectedStandards.ir)));
	}
	$scope.clearButton = function(){
		$scope.selectedStandards = _.cloneDeep(initalConfig);
	}	

	$scope.clearButton();

});

app.controller('PlanningCtrl', function($scope, $http, FetchStandards) {
	
	//get the array object of selected standards
	$scope.passed = FetchStandards.retrieve();
	//set new scope to that array for editing purposes 
	//function parameter referrences are passed by value 
	$scope.toEdit = _.cloneDeep($scope.passed);

	//boolean for editing info bar
	$scope.infoEditable = [true];

	//scope variables for teacher input
	$scope.infoHeader = ["","",""];

	$scope.infoReset = function () {
		$scope.infoHeader = ["","",""];
	}

	FetchStandards.getPlanningList(function(det){
		//put everything in planning.json into planningData 
		$scope.planningData = det;
		//duplicate that .json data for cancel purposes
		$scope.planningEdited = _.cloneDeep($scope.planningData);
	});
	

	$scope.planningEditsReset = function(key, index){
		//revert to originals
		$scope.planningData[key][index] = _.cloneDeep($scope.planningEdited[key][index]);
		//what happens if a person wants to go back and edit again...?
	}

	//check if any of the reading subhead arrays contain true
	$scope.anyReading = function(){
		// if those arrays are !empty then returns a true for the ng-if 
		// _.compact returns array with all false/null values removed so this will return a true of ANY of the reading subhead arrays contain a true
		return !_.isEmpty(_.compact([].concat($scope.passed.ki, $scope.passed.cs, $scope.passed.ik, $scope.passed.rr)));
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
		return !_.isEmpty(_.compact([].concat($scope.passed.cr, $scope.passed.sr, $scope.passed.ir)));
	}
	$scope.subCheck = function(key){
		return !_.isEmpty(_.compact($scope.passed[key])); 
	}
		
});

app.controller('ScoringCtrl', function($scope, $http, FetchStandards) {
	//arrays to keep track of when edit function for standard is enabled 
	$scope.isEditableRPro = [];
	$scope.isEditableRPer = [];

	$scope.isEditableWPro = [];
	$scope.isEditableWPer = [];

	$scope.isEditableSLPro = [];
	$scope.isEditableSLPer = [];

	$scope.isEditableLPro = [];
	$scope.isEditableLPer = [];

	$scope.isEditableCPSPro = [];
	$scope.isEditableCPSPer = [];

	$scope.isEditableCSRPro = [];
	$scope.isEditableCSRPer = [];

	FetchStandards.getScoringList(function(det){
		//put everything in scoring.json into scoringData 
		$scope.scoringData = det;
		//duplicate that .json data for cancel purposes
		$scope.scoringEdited = _.cloneDeep($scope.scoringData);
	});

	$scope.perLevels = ["Proficient", "Developing", "Emerging", "Insufficient evidence"];

	$scope.perLevelsClean = _.cloneDeep($scope.perLevels);


	$scope.scoringProEditsReset = function(key, index){
		//revert to originals
		$scope.scoringData[key][index] = _.cloneDeep($scope.scoringEdited[key][index]);
	}

	$scope.scoringPerEditsReset = function(key, index){
		//revert to originals
		$scope.perLevels[key][index] = _.cloneDeep($scope.scoringEdited[key][index]);
	}

	//boolean for editing info bar
	$scope.assignmentEditable = [true];
	$scope.gradeDateEditable = [true];

	//scope variables for teacher input
	$scope.assignment = "";
	$scope.gradeDate = ["", ""];

	//functions to reset the text on clear
	$scope.assignmentReset = function () {
		$scope.assignment = "";
	}
	$scope.gradeDateReset = function () {
		$scope.gradeDate = ["", ""];
	}

	//scope object with user selected standards 
	$scope.passed = FetchStandards.retrieve();
	//concatinate all substandards of the same standard together (to match with scoring.json structure)
	$scope.passedConcat = {
		"allReading" : [].concat($scope.passed.ki, $scope.passed.cs, $scope.passed.ik, $scope.passed.rr),
		"allWriting" : [].concat($scope.passed.tt, $scope.passed.pd, $scope.passed.rb, $scope.passed.rw),
		"allSpeakingListening" : [].concat($scope.passed.cc, $scope.passed.pk),
		"allLanguage" : [].concat($scope.passed.sl, $scope.passed.kl, $scope.passed.va),
		"allCreative" : [].concat($scope.passed.kn, $scope.passed.pr, $scope.passed.co),
		"allResponsibility" : [].concat($scope.passed.cr, $scope.passed.sr, $scope.passed.ir)
	};

	$scope.anyCheck = function (head){
		return !_.isEmpty(_.compact(head));
	}

});

app.factory('FetchStandards', function($http){
	var standardsPass;
	
	return {
		//getting standards.json
		getStandardsList: function(callback){
			$http.get('json/standards.json').success(callback);
		},
		//saving what user clicked
		save: function(selection) {
			standardsPass = selection;
		},
		//retrieving what user clicked
		retrieve: function() {
			return standardsPass;
		},
		//getting planning.json
		getPlanningList: function(callback){
			$http.get('json/planning.json').success(callback);
		},
		//getting scoring.json
		getScoringList: function(callback){
			$http.get('json/scoring.json').success(callback);
		}
	}
});

