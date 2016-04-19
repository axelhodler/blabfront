'use strict';

angular.module('blab')
  .controller('BlabController', function($scope, $http, TokenRepository, REST_API_URL) {
    $scope.text = [];
    TokenRepository.fetchToken().then(function(token) {
      $http.get(REST_API_URL + '/ledgers', {
        headers: {
          "Authorization": token
        }
    }).then(function(resp) {
        $scope.text = resp.data;
      })
    });
});