'use strict';

angular.module('blab')
  .controller('LedgerDetailController', function($scope, $routeParams, $http, TokenRepository) {
    $scope.ethereumAddress = $routeParams.id;

    $scope.createTransaction = function() {
      TokenRepository.fetchToken().then(function(token) {
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