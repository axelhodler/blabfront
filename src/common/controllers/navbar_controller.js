'use strict';

angular.module('blab')
  .controller('NavbarController', NavbarController);

function NavbarController(TokenRepository) {
  var vm = this;

  this.userLoggedIn = function() {
    return TokenRepository.getDecodedToken() ? setFullNameOnScope() : false;
  };

  var setFullNameOnScope = function() {
    vm.loggedInUserFullname = TokenRepository.getDecodedToken().fullName;
    return true;
  };
}

NavbarController.$inject = ['TokenRepository'];