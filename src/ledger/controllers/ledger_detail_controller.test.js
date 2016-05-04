'use strict';

describe('LedgerDetailController', function () {
  var subject,
    locationSpy,
    deferredTransaction,
    deferredLedgerEntry,
    ledgerStub,
    exchangeServiceSpy,
    rootScope;

  beforeEach(module('blab'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$q_, _Ledgers_, _ExchangeService_) {
    rootScope = _$rootScope_;
    locationSpy = { path: function() {}};
    spyOn(locationSpy, 'path');

    deferredTransaction = _$q_.defer();
    deferredLedgerEntry = _$q_.defer();
    ledgerStub = _Ledgers_;
    spyOn(ledgerStub, 'createTransaction').and.returnValue(deferredTransaction.promise);
    spyOn(ledgerStub, 'getOneById').and.returnValue(deferredLedgerEntry.promise);

    exchangeServiceSpy = _ExchangeService_;
    spyOn(exchangeServiceSpy, 'toEuro');

    subject = _$controller_('LedgerDetailController', {
      $routeParams: { id: 'ethereumAddress'},
      $location: locationSpy,
      Ledgers: ledgerStub,
      ExchangeService: exchangeServiceSpy
    });
  }));

  it('uses account id in the route params', function () {
    expect(subject.ethereumAddress).toBe('ethereumAddress');
  });

  it('fetches the single ledger infos', function() {
    deferredLedgerEntry.resolve({data: 'data'});

    rootScope.$digest();

    expect(subject.data).toBe('data')
  });

  it('can create transactions', function() {
    subject.amountToSend = 100;
    deferredTransaction.resolve();

    subject.createTransaction();
    rootScope.$digest();

    expect(locationSpy.path).toHaveBeenCalledWith('/ledger');
  });

  describe('exchanging blab to euro', function() {
    it('can exchange if owned blab greater or equal to chosen exchange amount', function() {
      subject.amountToExchange = 100;
      subject.data.tokenAmount = 100;

      expect(subject.isAllowedToExchangeChosenAmount()).toBe(true);
    });

    it('cannot exchange if owned blab less than chosen exchange amount', function() {
      subject.amountToExchange = 2;
      subject.data.tokenAmount = 1;

      expect(subject.isAllowedToExchangeChosenAmount()).toBe(false);
    });

    it('can exchange blab to euro', function() {
      subject.amountToExchange = 100;
      subject.data.tokenAmount = 102;

      subject.exchangeToEuro();

      expect(exchangeServiceSpy.toEuro).toHaveBeenCalledWith(100);
    });
  });
});