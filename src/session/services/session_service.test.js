'use strict';

describe('SessionService', function () {
  var subject;

  beforeEach(module('blab'));

  beforeEach(inject(function (_SessionService_) {
    subject = _SessionService_;
  }));

  it('knows if user logged in', function () {
    expect(subject.userLoggedIn()).toBe(false);
  });
});