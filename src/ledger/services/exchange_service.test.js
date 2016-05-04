'use strict';

describe('ExchangeService', function () {
  var subject,
    httpBackend;

  beforeEach(module('blab'));

  beforeEach(inject(function (_$httpBackend_, _ExchangeService_, _REST_API_URL_) {
    httpBackend = _$httpBackend_;
    subject = _ExchangeService_;
    this.REST_API_URL = _REST_API_URL_;
  }));

  var isPromise = function(value) {
    expect(value.then).toEqual(jasmine.any(Function));
  };

  it('can post exchange request', function () {
    var amountToExchange = 100;
    var recipient = 'etherAddressAsRecipientId';
    httpBackend.expectPOST(this.REST_API_URL + '/exchange', {
      amount: amountToExchange,
      recipient: recipient
    }).respond({});

    var response = subject.toEuro(amountToExchange, recipient);
    httpBackend.flush();

    isPromise(response);
  });
});