'use strict';

angular.module('blab')
  .controller('LedgerDetailController', LedgerDetailController);

function LedgerDetailController($routeParams, $http, $location, TokenRepository, REST_API_URL) {
  this.ethereumAddress = $routeParams.id;

  this.createTransaction = function() {
    TokenRepository.fetchToken().then(function(token) {
      $http.post(REST_API_URL + '/transactions',
        {
          to: this.ethereumAddress,
          amount: this.amountToSend
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
