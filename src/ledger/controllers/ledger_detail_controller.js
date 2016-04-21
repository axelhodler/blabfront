'use strict';

angular.module('blab')
  .controller('LedgerDetailController', LedgerDetailController);

function LedgerDetailController($routeParams, $location, Ledgers, TokenRepository) {
  var vm = this;
  vm.ethereumAddress = $routeParams.id;

  vm.createTransaction = function() {
    TokenRepository.fetchToken().then(function(token) {
      Ledgers.createTransaction(token, vm.ethereumAddress, vm.amountToSend);
    });
    $location.path('/ledger');
  }
};