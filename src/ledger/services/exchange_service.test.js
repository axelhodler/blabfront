'use strict';

describe('ExchangeService', function () {
  var subject;

  beforeEach(module('blab'));

  beforeEach(inject(function (_ExchangeService_) {
    subject = _ExchangeService_;
  }));

  it('is a module', function () {
    expect(subject).not.toBeUndefined();
  });
});