'use strict';

var LogoutPage = function() {
  this.logout = function() {
    element(by.id("logout_button")).click();
  };
};

module.exports = LogoutPage;