'use strict';

angular.module('blab')
  .controller('LoginController', function($scope, $http, TokenRepository, REST_API_URL, $location) {
    $scope.login = function() {
      $http.post(REST_API_URL + '/auth', {
        'email': $scope.username,
        'password': $scope.password}
      ).then(function(response) {
        TokenRepository.store(response.data);
        $location.path('/ledger');
      });
    }
  });