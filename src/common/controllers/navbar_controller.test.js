'use strict';

describe('NavbarController', function () {
  var subject,
    tokenRepoStub;

  beforeEach(module('blab'));

  beforeEach(inject(function (_$controller_, _TokenRepository_) {
    tokenRepoStub = _TokenRepository_;

    subject = _$controller_('NavbarController', {
      TokenRepository: tokenRepoStub
    });
  }));

  describe('is user logged in', function () {
    it('is false if no user logged in', function () {
      expect(subject.userLoggedIn()).toBe(false);
    });

    it('is true if token is present', function () {
      spyOn(tokenRepoStub, 'getDecodedToken').and.returnValue('tokenPayload');

      expect(subject.userLoggedIn()).toBe(true);
    });

    it('sets user fullname on the scope if logged in', function() {
      spyOn(tokenRepoStub, 'getDecodedToken').and.returnValue({fullName: 'Ulysses the User'});

      subject.userLoggedIn();

      expect(subject.loggedInUserFullname).toBe('Ulysses the User');
    });
  });
});