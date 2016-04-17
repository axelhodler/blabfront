'use strict';

angular.module('blab')
  .controller('LedgerDetailController', function($scope, $routeParams) {
    $scope.ethereumAddress = $routeParams.id;

    $scope.createTransaction = function() {
      console.log('sending to', $scope.ethereumAddress, $scope.amountToSend);
    }
});