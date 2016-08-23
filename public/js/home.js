var controllerCode = angular.module('controllerCode', []);

var HomeCtrl = function($scope, $resource) {

  var aboutClicked = false;
  var hobbiesClicked = false;
  var skillsClicked = false;

  var Contact = $resource('/api/send_contact', {}, {
    update: {method: 'POST'}
  });

  $scope.contactInputValid = function() {
    return $scope.contactName != null &&
      $scope.contactEmail != null &&
      $scope.contactMessage != null;
  }
  
  $scope.clearContactInput = function() {
    $scope.contactName = null;
    $scope.contactEmail = null;
    $scope.contactMessage = null;
    $scope.contactClicked = false;
  }

  $scope.sendContactMessage = function() {
    if (!$scope.contactInputValid()) {
      $scope.shouldShowError = true;
      return;
    }
    Contact.update({name: $scope.contactName, email: $scope.contactEmail, message: $scope.contactMessage}, function(data) {
      $scope.clearContactInput();
      if (!data.error) {
        $scope.shouldShowError = false;
      }
    });
  }

  $scope.openResume = function() {
    window.open("img/resume.pdf", "_blank");
  }

}

controllerCode.controller('HomeCtrl', [
  '$scope',
  '$resource',
  HomeCtrl
  ]);
