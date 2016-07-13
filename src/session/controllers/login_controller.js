'use strict';

angular.module('blab')
  .controller('LoginController', LoginController);

function LoginController($location, TokenRepository, Authentication) {
  this.login = function () {
    Authentication.login(this.username, this.password).then(function (response) {
      TokenRepository.store(response.data);
      $location.path('/ledger');
    });
  };
}

LoginController.$inject = ['$location', 'TokenRepository', 'Authentication'];
