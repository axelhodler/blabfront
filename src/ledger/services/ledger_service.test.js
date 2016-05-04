'use strict';

describe('LedgerService', function () {
  var subject,
    http;

  beforeEach(module('blab'));

  beforeEach(module(function($provide) {
    var windowStub = {
      sessionStorage: {
        token : 'token'
      }
    };
    $provide.value('$window', windowStub);
  }));

  beforeEach(inject(function (_Ledgers_, _$httpBackend_, _REST_API_URL_) {
    subject = _Ledgers_;
    http = _$httpBackend_;
    this.REST_API_URL = _REST_API_URL_;
  }));

  var isPromise = function(value) {
    expect(value.then).toEqual(jasmine.any(Function));
  };

  it('gets all ledger entries', function () {
    http.expectGET(this.REST_API_URL + '/ledgers')
      .respond({data: 'stubbedResponse'});

    var returnValue = subject.getAll();
    http.flush();

    isPromise(returnValue);
  });

  it('can get single ledger entry by id', function () {
    http.expectGET(this.REST_API_URL + '/ledgers/id')
      .respond({data: 'stubbedResponse'});

    var returnValue = subject.getOneById('id');
    http.flush();

    isPromise(returnValue);
  });

  it('creates transactions', function() {
    http.expectPOST(this.REST_API_URL + '/transactions', {
      to: 'toAddress',
      amount: 12
    }).respond({});

    var returnValue = subject.createTransaction('toAddress', 12);
    http.flush();

    isPromise(returnValue);
  });
});