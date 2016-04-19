'use strict';

angular.module('blab')
  .controller('LedgerDetailController', LedgerDetailController);

function LedgerDetailController($scope, $routeParams, $http, $location, TokenRepository, REST_API_URL) {
  $scope.ethereumAddress = $routeParams.id;

  $scope.createTransaction = function() {
    TokenRepository.fetchToken().then(function(token) {
      $http.post(REST_API_URL + '/transactions',
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
    $location.path('/ledger');
  }
};
