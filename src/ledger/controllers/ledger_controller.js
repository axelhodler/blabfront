'use strict';

angular.module('blab')
  .controller('BlabController', BlabController);

function BlabController(TokenRepository, Ledgers) {
  var vm = this;

  vm.text = [];
  TokenRepository.fetchToken().then(function(token) {
    Ledgers.getAll(token).then(function(resp) {
      vm.text = resp.data;
    })
  });
};