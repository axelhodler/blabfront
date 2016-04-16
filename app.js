'use strict';

angular.module('blab', [])
  .controller('BlabController', function($scope, $http) {
    $scope.asdf = 'lol';
    $scope.text = [];
    $http.get('http://localhost:3000/ledgers', {
      headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiJ9.bWFpbDFAdGVzdC5jb20.8HToo4SXSKEZoStUcJmL8PMUgV4NXdkmL6AU3-62J9g"
      }
    }).then(function(resp) {
      $scope.text = resp.data;
    })
});