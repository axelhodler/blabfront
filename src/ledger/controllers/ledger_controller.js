'use strict';

angular.module('blab')
  .controller('BlabController', BlabController);

function BlabController($scope, TokenRepository, Ledgers) {
  $scope.text = [];
  TokenRepository.fetchToken().then(function(token) {
    Ledgers.getAll(token).then(function(resp) {
      $scope.text = resp.data;
    })
  });
};