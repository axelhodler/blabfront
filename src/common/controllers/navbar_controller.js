'use strict';

angular.module('blab')
  .controller('NavbarController', NavbarController);

function NavbarController(TokenRepository) {
  this.userLoggedIn = function() {
    return TokenRepository.getDecodedToken() ? true : false;
  }
}