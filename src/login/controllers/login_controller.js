'use strict';

angular.module('blab')
  .controller('LoginController', function($scope, $http, $localForage, $location) {
    $scope.login = function() {
      $http.post('http://localhost:3000/auth', {
        'email': $scope.username,
        'password': $scope.password}
      ).then(function(response) {
        $localForage.setItem('jwt', response.data);
        $location.path('/ledger');
      });
    }
  });