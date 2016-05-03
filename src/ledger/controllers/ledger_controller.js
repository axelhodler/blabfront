'use strict';

angular.module('blab')
  .controller('BlabController', BlabController);

function BlabController(TokenRepository, Ledgers) {
  var vm = this;

  vm.text = [];
  Ledgers.getAll().then(function(resp) {
    vm.text = resp.data;
  })

};