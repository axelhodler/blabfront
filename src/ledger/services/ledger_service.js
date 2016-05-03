(function () {
  'use strict';

  angular.module('blab')
    .service('Ledgers', Ledgers);

  function Ledgers($http, $window, REST_API_URL) {
    var getToken = function() {
      return $window.sessionStorage.token;
    };

    var authorizationHeader = function(value) {
      return {
        headers: {
          "Authorization": value
        }
      }
    };

    this.getAll = function() {
      return $http.get(REST_API_URL + '/ledgers', authorizationHeader(getToken()));
    };

    this.createTransaction = function(toAddress, amount) {
      return $http.post(REST_API_URL + '/transactions',
        {
          to: toAddress,
          amount: amount
        },
        authorizationHeader(getToken())
      );
    };
  }
})();
