'use strict';

angular.module('blab')
  .controller('LoginController', function($scope, $http, TokenRepository, $location) {
    $scope.login = function() {
      $http.post('http://localhost:3000/auth', {
        'email': $scope.username,
        'password': $scope.password}
      ).then(function(response) {
        TokenRepository.store(response.data);
        $location.path('/ledger');
      });
    }
  });