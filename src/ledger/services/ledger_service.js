(function () {
  'use strict';

  angular.module('blab')
    .service('Ledgers', Ledgers);

  function Ledgers($http, REST_API_URL) {
    var authorizationHeader = function(value) {
      return {
        headers: {
          "Authorization": value
        }
      }
    };

    this.getAll = function(token) {
      return $http.get(REST_API_URL + '/ledgers', authorizationHeader(token));
    };

    this.createTransaction = function(token, toAddress, amount) {
      return $http.post(REST_API_URL + '/transactions',
        {
          to: toAddress,
          amount: amount
        },
        authorizationHeader(token)
      );
    };
  }
})();
