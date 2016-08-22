var controllerCode = angular.module('controllerCode', []);

var HomeCtrl = function($scope, $resource) {

  var aboutClicked = false;
  var hobbiesClicked = false;
  var skillsClicked = false;

  var Contact = $resource('/api/send_contact', {}, {
    update: {method: 'POST'}
  });

  $scope.sendContactMessage = function() {
    Contact.update({name: $scope.contactName, email: $scope.contactEmail, message: $scope.contactMessage}, function(data) {
      if (data.error) {
        console.log('error');
        $scope.shouldShowContactError = true;
        return;
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
