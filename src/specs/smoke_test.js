'use strict';

var LoginPage = require('./page_objects/login');
var Navbar = require('./page_objects/navbar');
var Overview = require('./page_objects/overview');
var DetailPage = require('./page_objects/detail');

describe('Blabfront', function() {

  var loginPage,
    overview;

  beforeAll(function() {
    overview = new Overview();
    loginPage = new LoginPage();

    browser.get('http://0.0.0.0:8080/');
    loginPage.login();
  });

  it('logout works', function() {
    var navbar = new Navbar();
    navbar.logout();
    loginPage.login();

    expect(overview.firstTokenAmountInList()).toEqual("10000");
    expect(navbar.loggedInUserName()).toEqual('Timmy Tromp');
  });

  it('can view details', function() {
    var detailPage = new DetailPage();

    overview.enterFirstUsersDetails();

    expect(detailPage.currentBalance()).toContain('10000');
  });

});
