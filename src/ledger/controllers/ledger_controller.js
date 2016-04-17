'use strict';

angular.module('blab')
  .controller('BlabController', function($scope, $http, $localForage) {
    $scope.text = [];
    $localForage.getItem('jwt').then(function(token) {
      console.log('got', token);
      $http.get('http://localhost:3000/ledgers', {
        headers: {
          "Authorization": token
        }
    }).then(function(resp) {
        $scope.text = resp.data;
      })
    });
});