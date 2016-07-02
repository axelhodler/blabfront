'use strict';

describe('Blabfront', function() {
  it('works at least somewhat ;)', function() {
    browser.get('http://0.0.0.0:8080/');

    element(by.id("login_username")).sendKeys("mail0@test.com");
    element(by.id("login_password")).sendKeys("pw0");
    element(by.id("login_form_submit")).click();

    expect(element(by.tagName('html')).getText()).toContain("10000");
  });
});
