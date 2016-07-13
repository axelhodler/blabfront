'use strict';

describe('SessionService', function () {
  var subject,
    stubbedDecodedToken;

  beforeEach(module('blab'));

  beforeEach(module(function ($provide) {
    var tokenRepoStub = {
      getDecodedToken: function() {
        return stubbedDecodedToken;
      }
    };
    $provide.value('TokenRepository', tokenRepoStub);
  }));

  beforeEach(inject(function (_SessionService_) {
    subject = _SessionService_;
  }));

  it('knows if user not logged in', function () {
    stubbedDecodedToken = undefined;

    expect(subject.userLoggedIn()).toBe(false);
  });

  it('knows if user logged in', function () {
    stubbedDecodedToken = 'token';

    expect(subject.userLoggedIn()).toBe(true);
  });

  it('knows name of currently logged in user', function () {
    stubbedDecodedToken = { fullName : 'Horus'};

    expect(subject.loggedInUserFullName()).toBe('Horus');
  });
});