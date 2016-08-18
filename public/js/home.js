var controllerCode = angular.module('controllerCode', []);

var HomeCtrl = function($scope, $resource) {
  console.log('hi');
}

controllerCode.controller('HomeCtrl', [
  '$scope',
  '$resource',
  HomeCtrl
  ]);

/*angular.module('controllerApp').controller('HomeCtrl', [
  '$scope',
  '$resource',
  function($scope, $resource) {
  console.log('home');
  
}]);*/
