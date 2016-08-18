var controllerApp = angular.module('controllerApp', [
  'ngRoute',
  'ngResource',
  'controllerCode'
  ]);

controllerApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
