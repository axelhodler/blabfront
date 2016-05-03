'use strict';

describe('BlabController', function () {
  var subject,
    ledgersStub,
    $rootScope,
    deferredLedgers;

  beforeEach(module('blab'));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _Ledgers_) {
    $rootScope = _$rootScope_;

    deferredLedgers = _$q_.defer();

    ledgersStub = _Ledgers_;
    spyOn(ledgersStub, 'getAll').and.returnValue(deferredLedgers.promise);

    subject = _$controller_('BlabController', {
      Ledgers: ledgersStub
    });
  }));

  it('gets ledger overview', function () {
    deferredLedgers.resolve({data: 'ledgers'});

    $rootScope.$digest();

    expect(subject.text).toBe('ledgers');
  });

});