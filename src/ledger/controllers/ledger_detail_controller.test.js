'use strict';

describe('LedgerDetailController', function () {
  var subject,
    locationSpy,
    deferredTransaction,
    ledgerStub,
    rootScope;

  beforeEach(module('blab'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$q_, _Ledgers_) {
    rootScope = _$rootScope_;
    locationSpy = { path: function() {}};
    spyOn(locationSpy, 'path');

    deferredTransaction = _$q_.defer();
    ledgerStub = _Ledgers_;
    spyOn(ledgerStub, 'createTransaction').and.returnValue(deferredTransaction.promise);

    subject = _$controller_('LedgerDetailController', {
      $routeParams: { id: 'ethereumAddress'},
      $location: locationSpy,
      Ledgers: ledgerStub
    });
  }));

  it('uses account id in the route params', function () {
    expect(subject.ethereumAddress).toBe('ethereumAddress');
  });

  it('can create transactions', function() {
    subject.amountToSend = 100;
    deferredTransaction.resolve();

    subject.createTransaction();
    rootScope.$digest();

    expect(locationSpy.path).toHaveBeenCalledWith('/ledger');
  });
});