'use strict';

angular.module('blab')
  .controller('LedgerDetailController', function($scope, $routeParams, $http, $localForage) {
    $scope.ethereumAddress = $routeParams.id;

    $scope.createTransaction = function() {
      $localForage.getItem('jwt').then(function(token) {
        $http.post('http://localhost:3000/transactions',
          {
            to: $scope.ethereumAddress,
            amount: $scope.amountToSend
          },
          {
            headers: {
              "Authorization": token
            }
          }
        );
      });
    }
});