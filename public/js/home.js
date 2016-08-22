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
      if (data.error) {
        $scope.clearContactInput();
        return;
      } else {
        $scope.shouldShowError = false;
        $scope.clearContactInput();
      }
    });
  }

  $scope.openResume = function() {
    window.open("img/resume.pdf", "_blank");
  }

  /*$('.picture-box').click(function() {
    $('.picture-box').child('.fade-in')
  });*/

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
