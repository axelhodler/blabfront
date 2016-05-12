'use strict';

describe('Blabfront', function() {
  it('works at least somewhat ;)', function() {
    browser.get('http://0.0.0.0:8080/');

    element(by.id("username")).sendKeys("mail0@test.com");
    element(by.xpath("//div[@class='col-md-12']/div/div/form/input[2]")).sendKeys("pw0");
    element(by.css("input.btn.btn-primary")).click();
    expect(element(by.tagName('html')).getText()).toContain("10000");
  });
});
