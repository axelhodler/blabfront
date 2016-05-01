'use strict';

describe('LedgerService', function () {
  var subject,
    http;

  beforeEach(module('blab'));

  beforeEach(inject(function (_Ledgers_, _$httpBackend_, _REST_API_URL_) {
    subject = _Ledgers_;
    http = _$httpBackend_;
    this.REST_API_URL = _REST_API_URL_;
  }));

  it('gets all ledger entries', function () {
    http.expectGET(this.REST_API_URL + '/ledgers',
      {
        'Authorization':'token',
        'Accept':'application/json, text/plain, */*'
      }).respond({data: 'stubbedResponse'});

    var promise = subject.getAll('token');
    http.flush();

    expect(promise.then).toEqual(jasmine.any(Function));
  });

});