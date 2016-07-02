'use strict';

var LoginPage = function() {
  this.login = function() {
    element(by.id("login_username")).sendKeys("mail0@test.com");
    element(by.id("login_password")).sendKeys("pw0");
    element(by.id("login_form_submit")).click();
  };
};

module.exports = LoginPage;