'use strict';

describe('TokenService', function () {
  var subject;

  beforeEach(module('blab'));

  beforeEach(module(function($provide) {
    $provide.value('$window', { sessionStorage: { token: ''}});
  }));

  beforeEach(inject(function (_TokenRepository_) {
    subject = _TokenRepository_;
  }));

  it('stores token', function () {
    subject.store('token');

    expect(subject.fetchToken()).toBe('token')
  });

});