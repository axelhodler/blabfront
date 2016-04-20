'use strict';

angular.module('blab')
  .controller('LedgerDetailController', LedgerDetailController);

function LedgerDetailController($routeParams, $http, $location, TokenRepository, REST_API_URL) {
  var vm = this;
  vm.ethereumAddress = $routeParams.id;

  vm.createTransaction = function() {
    TokenRepository.fetchToken().then(function(token) {
      $http.post(REST_API_URL + '/transactions',
        {
          to: vm.ethereumAddress,
          amount: vm.amountToSend
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
