'use strict';

/* Controllers */
var phonecatApp= angular.module('phonecatApp', ['ngRoute','ngAnimate']);
phonecatApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:"template/home.html",
		controller:"PhoneListCtrl"
	})
	.when('/about',{
		templateUrl:"template/about.html",
		controller:"AboutCtrl"
	})
	.when('/contact',{
		templateUrl:"template/contact.html",
		controller:"ContactCtrl"
	})
	.when('/phones/:phoneId',{
		templateUrl:"template/phone-detail.html",
		controller:"PhoneDetailCtrl"
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

phonecatApp.controller('PhoneListCtrl',['$scope','$http','$location',
	function($scope,$http, $location){
	$http.get('phones/phones.json').success(function(data,status,headers,config) {
		$scope.phones=data;
	});
}]);
phonecatApp.controller('AboutCtrl',['$scope','$http','$location', function($scope,$http, $location){
	
}]);
phonecatApp.controller('ContactCtrl',['$scope','$http','$location', function($scope,$http, $location){
	
}]);
phonecatApp.controller('PhoneDetailCtrl',['$scope','$http','$location','$routeParams', function($scope,$http, $location, $routeParams){
	$scope.phoneId=$routeParams.phoneId;
	var url='phones/'+$scope.phoneId+'.json';
	$http.get(url).success(function(data){
		$scope.phone=data;
		$scope.mainImageUrl=data.images[0];
	})
	$scope.setImage= function(imgUrl){
		$scope.mainImageUrl= imgUrl;
	};
}]);
