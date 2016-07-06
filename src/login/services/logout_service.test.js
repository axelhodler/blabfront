'use strict';

describe('LogoutService', function () {
  var subject,
    locationSpy;

  beforeEach(module('blab'));

  beforeEach(module(function($provide) {
    locationSpy = { path: {}};
    spyOn(locationSpy, 'path');
    $provide.value('$location', locationSpy);
  }));

  beforeEach(inject(function(_LogoutService_) {
    subject = _LogoutService_;
  }));

  it('exists', function() {
    expect(subject).not.toBeUndefined();
  });

  describe('logout', function() {
    it('redirects to login', function() {
      subject.logout();

      expect(locationSpy.path).toHaveBeenCalledWith('/');
    });
  });
});
