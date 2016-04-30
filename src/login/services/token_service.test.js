'use strict';

describe('TokenService', function () {
  var subject,
    localForageMock;

  beforeEach(module('blab'));

  beforeEach(module(function ($provide) {
    localForageMock = {
      setItem: function() {
      },
      getItem: function() {
        return 'stubbedToken';
      }
    };
    spyOn(localForageMock, 'setItem');
    $provide.value("$localForage", localForageMock);
  }));

  beforeEach(inject(function (_TokenRepository_) {
    subject = _TokenRepository_;
  }));

  it('stores token', function () {
    subject.store('token');

    expect(localForageMock.setItem).toHaveBeenCalledWith('jwt', 'token');
  });

  it('retrieves token', function () {
    var token = subject.fetchToken();

    expect(token).toBe('stubbedToken');
  });
});