'use strict';

var LoginPage = require('./page_objects/login');
var Overview = require('./page_objects/overview');

describe('Blabfront', function() {
  it('works at least somewhat ;)', function() {
    browser.get('http://0.0.0.0:8080/');

    var loginPage = new LoginPage();
    loginPage.login();

    var overview = new Overview();
    expect(overview.firstTokenAmountInList()).toEqual("10000");
  });
});
