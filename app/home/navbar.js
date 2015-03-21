angular.module('MyApp')
  .controller('NavbarCtrl', ['$scope', 'attributesService', '$auth', function($scope, attributesService, $auth) {

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  }
]);
