'use strict';

angular.module('blab')
  .controller('LoginController', LoginController);

function LoginController($location, TokenRepository, LoginService) {
  this.login = function () {
    LoginService.login(this.username, this.password)
      .then(function (response) {
        TokenRepository.store(response.data).then(function() {
          $location.path('/ledger');
        });
      });
  }
}
