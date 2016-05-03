(function () {
  'use strict';

  angular.module('blab')
    .service('TokenRepository', TokenRepository);

  function TokenRepository($window) {
    this.store = function(token) {
      $window.sessionStorage.token = token;
    };

    this.fetchToken = function() {
      return $window.sessionStorage.token;
    };
  }

})();
