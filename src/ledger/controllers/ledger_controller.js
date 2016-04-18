'use strict';

angular.module('blab')
  .controller('BlabController', function($scope, $http, TokenRepository) {
    $scope.text = [];
    TokenRepository.fetchToken().then(function(token) {
      $http.get('http://localhost:3000/ledgers', {
        headers: {
          "Authorization": token
        }
    }).then(function(resp) {
        $scope.text = resp.data;
      })
    });
});