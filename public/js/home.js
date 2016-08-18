var controllerCode = angular.module('controllerCode', []);

var HomeCtrl = function($scope, $resource) {

  var aboutClicked = false;
  var hobbiesClicked = false;
  var skillsClicked = false;

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
