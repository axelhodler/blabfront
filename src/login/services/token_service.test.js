'use strict';

describe('TokenService', function () {
  var subject,
    jwtHelperStub;

  beforeEach(module('blab'));

  beforeEach(module(function($provide) {
    jwtHelperStub = { decodeToken: function() {}};
    spyOn(jwtHelperStub, 'decodeToken').and.returnValue('tokenPayload');
    $provide.value('jwtHelper', jwtHelperStub);

    $provide.value('$window', { sessionStorage: { token: ''}});
  }));

  beforeEach(inject(function (_TokenRepository_) {
    subject = _TokenRepository_;
  }));

  it('stores token', function () {
    subject.store('token');

    expect(subject.fetchToken()).toBe('token')
  });

  it('can decode token if present', function () {
    subject.store('token');

    expect(subject.getDecodedToken()).toBe('tokenPayload');
  });

  it('returns undefined if no token present', function() {
    expect(subject.getDecodedToken()).toBeUndefined();
  });
});