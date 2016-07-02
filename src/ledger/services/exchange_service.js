'use strict';

angular.module('blab')
  .service('ExchangeService', ExchangeService);

function ExchangeService($http, REST_API_URL) {
  this.toEuro = function(amount, recipient) {
    return $http.post(REST_API_URL + '/exchange', {
      amount: amount,
      recipient: recipient
    });
  };
}

ExchangeService.$inject = ['$http', 'REST_API_URL'];

