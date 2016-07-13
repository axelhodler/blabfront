'use strict';

describe('Login', function () {
  var subject,
    deferredLogin,
    deferredLoginPromise,
    authenticationMock,
    TokenRepositorySpy,
    locationSpy,
    $rootScope;

  beforeEach(module('blab'));

  beforeEach(module(function ($provide) {
    authenticationMock = { login: function (username, pw) {
      if (username === 'username' && pw === 'pw') {
        return deferredLoginPromise;
      }
    }};
    $provide.value('Authentication', authenticationMock);

    TokenRepositorySpy = { store: {}};
    spyOn(TokenRepositorySpy, 'store');
    $provide.value('TokenRepository', TokenRepositorySpy);

    locationSpy = { path: {}};
    spyOn(locationSpy, 'path');
    $provide.value('$location', locationSpy);
  }));

  beforeEach(inject(function (_$rootScope_, _$q_, _Login_) {
    deferredLogin = _$q_.defer();

    subject = _Login_;
    $rootScope = _$rootScope_;
  }));

  it('stores tokens', function () {
    deferredLoginPromise = deferredLogin.promise;
    deferredLogin.resolve({data: 'token'});

    subject.login('username', 'pw');
    $rootScope.$digest();

    expect(TokenRepositorySpy.store).toHaveBeenCalledWith('token');
    expect(locationSpy.path).toHaveBeenCalledWith('/ledger');
  });

});