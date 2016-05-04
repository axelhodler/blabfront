'use strict';

angular.module('blab')
  .service('ExchangeService', ExchangeService);

function ExchangeService($http, REST_API_URL) {
  this.toEuro = function(amount) {
    return $http.post(REST_API_URL + '/exchange', {
      amount: amount
    });
  }
}

