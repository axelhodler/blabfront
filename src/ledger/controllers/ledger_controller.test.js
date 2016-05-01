'use strict';

describe('BlabController', function () {
  var subject,
    ledgersStub,
    tokenRepoStub,
    $rootScope,
    deferredtoken,
    deferredLedgers;

  beforeEach(module('blab'));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _Ledgers_, _TokenRepository_) {
    $rootScope = _$rootScope_;

    deferredtoken = _$q_.defer();
    deferredLedgers = _$q_.defer();

    tokenRepoStub = _TokenRepository_;
    spyOn(tokenRepoStub, 'fetchToken').and.returnValue(deferredtoken.promise);

    ledgersStub = _Ledgers_;
    spyOn(ledgersStub, 'getAll').and.returnValue(deferredLedgers.promise);

    subject = _$controller_('BlabController', {
      TokenRepository: tokenRepoStub,
      Ledgers: ledgersStub
    });
  }));

  it('gets ledger overview', function () {
    deferredtoken.resolve('token');
    deferredLedgers.resolve({data: 'ledgers'});

    $rootScope.$digest();

    expect(subject.text).toBe('ledgers');
  });

});