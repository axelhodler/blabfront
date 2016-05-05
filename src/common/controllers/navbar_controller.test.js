'use strict';

describe('NavbarController', function () {
  var subject;

  beforeEach(module('blab'));

  beforeEach(inject(function (_$controller_) {
    subject = _$controller_('NavbarController', {

    });
  }));

  it('knows if user is logged in', function () {
    expect(subject).not.toBeUndefined();
  });
});