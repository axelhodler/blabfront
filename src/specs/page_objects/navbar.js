'use strict';

var Navbar = function() {
  this.logout = function() {
    element(by.id('logout_button')).click();
  };

  this.loggedInUserName = function() {
    return element(by.id('logged_in_username')).getText();
  };
};

module.exports = Navbar;