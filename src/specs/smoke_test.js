'use strict';

var LoginPage = require('./page_objects/login.js');

describe('Blabfront', function() {
  it('works at least somewhat ;)', function() {
    browser.get('http://0.0.0.0:8080/');

    var loginPage = new LoginPage();
    loginPage.login();

    expect(element(by.id('overview_tokenamount_0')).getText()).toEqual("10000");
  });
});
