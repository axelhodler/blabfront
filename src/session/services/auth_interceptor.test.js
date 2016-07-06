'use strict';

describe('authInterceptor', function() {
  var subject,
    TokenRepositoryStub;

  beforeEach(module('blab'));

  beforeEach(module(function($provide) {
    TokenRepositoryStub = { fetchToken: function() {}};

    $provide.value('TokenRepository', TokenRepositoryStub);
  }));

  beforeEach(inject(function(_authInterceptor_) {
    subject = _authInterceptor_;
  }));

  describe('token handling', function() {
    var config;

    beforeEach(function () {
      config = {};
    });

    it('adds present token to request', function() {
      spyOn(TokenRepositoryStub, 'fetchToken').and.returnValue('token');

      subject.request(config);

      expect(config.headers.Authorization).toBe('token');
    });

    it('adds present token to request', function() {
      spyOn(TokenRepositoryStub, 'fetchToken').and.returnValue();

      subject.request(config);

      expect(config.headers.Authorization).toBeUndefined();
    });

  });
});