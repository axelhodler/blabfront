'use strict';

angular.module('blab')
  .controller('LoginController', LoginController);

function LoginController(Login) {
  this.login = function () {
    Login.login(this.username, this.password);
  };
}

LoginController.$inject = ['Login'];
