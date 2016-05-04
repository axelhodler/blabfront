'use strict';

angular.module('blab')
  .controller('LedgerDetailController', LedgerDetailController);

function LedgerDetailController($routeParams, $location, Ledgers) {
  var vm = this;
  vm.ethereumAddress = $routeParams.id;

  Ledgers.getOneById(vm.ethereumAddress).then(function(entry) {
    vm.owner = entry.owner;
  });

  vm.createTransaction = function() {
    Ledgers.createTransaction(vm.ethereumAddress, vm.amountToSend).then(function() {
      $location.path('/ledger');
    });
  }
};