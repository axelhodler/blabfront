'use strict';

var LoginPage = require('./page_objects/login');
var LogoutPage = require('./page_objects/logout');
var Overview = require('./page_objects/overview');

describe('Blabfront', function() {

  it('logout works', function() {
    browser.get('http://0.0.0.0:8080/');

    var loginPage = new LoginPage();
    loginPage.login();
    var logoutPage = new LogoutPage();
    logoutPage.logout();
    loginPage.login();

    var overview = new Overview();
    expect(overview.firstTokenAmountInList()).toEqual("10000");
  });

});
