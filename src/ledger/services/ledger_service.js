(function () {
  'use strict';

  angular.module('blab')
    .service('Ledgers', Ledgers);

  function Ledgers($http, REST_API_URL) {
    this.getAll = function(token) {
      return $http.get(REST_API_URL + '/ledgers', {
        headers: {
          "Authorization": token
        }
      });
    }
  }
})();
