'use strict';

describe('LogoutService', function () {
  var subject;

  beforeEach(module('blab'));

  beforeEach(inject(function(_LogoutService_) {
    subject = _LogoutService_;
  }));

  it('exists', function() {
    expect(subject).not.toBeUndefined();
  });
});
