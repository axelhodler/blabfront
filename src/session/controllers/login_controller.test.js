'use strict';

describe('LoginController', function() {
  var subject,
    deferredLogin,
    authenticationMock,
    TokenRepositorySpy,
    locationSpy,
    $rootScope;

  beforeEach(module('blab'));

  beforeEach(inject(function (_$controller_, _$q_, _$rootScope_, _$location_,
                              _Authentication_ , _TokenRepository_) {
    $rootScope = _$rootScope_;

    deferredLogin = _$q_.defer();

    authenticationMock = _Authentication_;
    spyOn(authenticationMock, 'login').and.returnValue(deferredLogin.promise);

    TokenRepositorySpy = _TokenRepository_;
    spyOn(TokenRepositorySpy, 'store');

    locationSpy = _$location_;
    spyOn(locationSpy, 'path');

    subject = _$controller_('LoginController', {
      '$location': locationSpy,
      'Authentication': authenticationMock,
      'TokenRepository': TokenRepositorySpy
    });
    subject.username = 'username';
    subject.password = 'pw';
  }));

  it('stores tokens', function () {
    deferredLogin.resolve({data: 'token'});

    subject.login();
    $rootScope.$digest();

    expect(authenticationMock.login).toHaveBeenCalledWith('username', 'pw');
    expect(TokenRepositorySpy.store).toHaveBeenCalledWith('token');
    expect(locationSpy.path).toHaveBeenCalledWith('/ledger');
  });
});

