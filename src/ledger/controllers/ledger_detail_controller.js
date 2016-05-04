'use strict';

angular.module('blab')
  .controller('LedgerDetailController', LedgerDetailController);

function LedgerDetailController($routeParams, $location, Ledgers, ExchangeService) {
  var vm = this;
  vm.ethereumAddress = $routeParams.id;
  vm.data = {};

  Ledgers.getOneById(vm.ethereumAddress).then(function(entry) {
    vm.data = entry.data;
  });

  vm.createTransaction = function() {
    Ledgers.createTransaction(vm.ethereumAddress, vm.amountToSend).then(function() {
      $location.path('/ledger');
    });
  };

  vm.isAllowedToExchangeChosenAmount = function() {
    return vm.data.tokenAmount >= vm.amountToExchange;
  };

  vm.exchangeToEuro = function() {
    ExchangeService.toEuro(vm.amountToExchange);
    vm.data.tokenAmount -= vm.amountToExchange;
  }
};