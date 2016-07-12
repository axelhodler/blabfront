'use strict';

angular.module('blab')
  .controller('NavbarController', NavbarController);

function NavbarController(SessionService) {

  this.userLoggedIn = function() {
    return SessionService.userLoggedIn();
  };

  this.loggedInUserFullname = function() {
    return SessionService.loggedInUserFullName();
  };
}

NavbarController.$inject = ['SessionService'];