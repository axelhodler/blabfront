'use strict';

var LoginPage = require('./page_objects/login');
var Navbar = require('./page_objects/navbar');
var Overview = require('./page_objects/overview');

describe('Blabfront', function() {

  it('logout works', function() {
    browser.get('http://0.0.0.0:8080/');

    var loginPage = new LoginPage();
    loginPage.login();
    var navbar = new Navbar();
    navbar.logout();
    loginPage.login();

    var overview = new Overview();
    expect(overview.firstTokenAmountInList()).toEqual("10000");
    expect(navbar.loggedInUserName()).toEqual('Timmy Tromp');
  });

});
