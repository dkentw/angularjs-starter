'use strict';

angular.module('myDirectives', []).
  directive('foo', [function(){
    return function(scope, elm, attr){
      elm.text(scope.fooName + ' directive');
    };
  }]);
