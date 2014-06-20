'use strict';

var ctrls = angular.module('myControllers', []);

ctrls.controller('HomeCtrl',['$scope', function($scope){
  $scope.greenting = 'Hello';
  
}]);

ctrls.controller('AboutCtrl', ['$scope', function($scope){
  $scope.frameworkName = 'Angularjs';
  $scope.fooName = 'foo';
}]);
