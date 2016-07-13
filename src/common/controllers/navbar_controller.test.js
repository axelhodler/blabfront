'use strict';

describe('NavbarController', function () {
  var subject,
    sessionServiceStub;

  beforeEach(module('blab'));

  beforeEach(inject(function (_$controller_, _SessionService_) {
    sessionServiceStub = _SessionService_;

    subject = _$controller_('NavbarController', {
      SessionService: sessionServiceStub
    });
  }));

  describe('is user logged in', function () {
    it('is false if no user logged in', function () {
      spyOn(sessionServiceStub, 'userLoggedIn').and.returnValue(false);

      expect(subject.userLoggedIn()).toBe(false);
    });

    it('is true if token is present', function () {
      spyOn(sessionServiceStub, 'userLoggedIn').and.returnValue(true);

      expect(subject.userLoggedIn()).toBe(true);
    });

    it('sets user fullname on the scope if logged in', function() {
      spyOn(sessionServiceStub, 'loggedInUserFullName').and.returnValue('Ulysses the User');

      subject.userLoggedIn();

      expect(subject.loggedInUserFullname()).toBe('Ulysses the User');
    });
  });
});