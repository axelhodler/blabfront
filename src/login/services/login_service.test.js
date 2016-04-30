'use strict';

describe('LoginService', function() {
  var subject;

  beforeEach(module('blab'));

  beforeEach(inject(function(_LoginService_) {
    subject = _LoginService_;
  }));

  it('can be injected', function() {
    expect(subject).toBeDefined();
  })
});