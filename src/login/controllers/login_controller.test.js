'use strict';

describe('LoginController', function() {
  var subject,
    deferredLogin,
    deferredTokenStorage,
    LoginServiceMock,
    TokenRepositoryMock,
    locationSpy,
    $rootScope;

  beforeEach(module('blab'));

  beforeEach(inject(function (_$controller_, _$q_, _$rootScope_, _$location_,
                              _LoginService_ , _TokenRepository_) {
    $rootScope = _$rootScope_;

    deferredLogin = _$q_.defer();
    deferredTokenStorage = _$q_.defer();

    LoginServiceMock = _LoginService_;
    spyOn(LoginServiceMock, 'login').and.returnValue(deferredLogin.promise);

    TokenRepositoryMock = _TokenRepository_;
    spyOn(TokenRepositoryMock, 'store').and.returnValue(deferredTokenStorage.promise);

    locationSpy = _$location_;
    spyOn(locationSpy, 'path');

    subject = _$controller_('LoginController', {
      '$location': locationSpy,
      'LoginService': LoginServiceMock,
      'TokenRepository': TokenRepositoryMock
    });
    subject.username = 'username';
    subject.password = 'pw';
  }));

  it('stores tokens', function () {
    deferredLogin.resolve({data: 'token'});
    deferredTokenStorage.resolve();

    subject.login();
    $rootScope.$digest();

    expect(LoginServiceMock.login).toHaveBeenCalledWith('username', 'pw');
    expect(TokenRepositoryMock.store).toHaveBeenCalledWith('token');
    expect(locationSpy.path).toHaveBeenCalledWith('/ledger');
  });
});

