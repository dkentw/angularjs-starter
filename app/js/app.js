'use strict';

var myApp = angular.module('myApp',[
  'ngRoute',
  'myControllers',
  'myDirectives'
]);

//angular.module('myApp', ['ngRoute']).
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', { 
      templateUrl: 'templates/home.html', 
      controller: 'HomeCtrl'
    }).
    when('/about', {
      templateUrl: 'templates/about.html', 
      controller: 'AboutCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });
});