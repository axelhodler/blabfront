'use strict';

angular.module('blab')
  .controller('BlabController', BlabController);

function BlabController(Ledgers) {
  var vm = this;

  vm.text = [];
  Ledgers.getAll().then(function(resp) {
    vm.text = resp.data;
  })

};