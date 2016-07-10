'use strict';

var Navbar = function() {
  this.logout = function() {
    element(by.id("logout_button")).click();
  };
};

module.exports = Navbar;