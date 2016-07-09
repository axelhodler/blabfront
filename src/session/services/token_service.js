(function () {
  'use strict';

  angular.module('blab')
    .service('TokenRepository', TokenRepository);

  function TokenRepository($window, jwtHelper) {
    this.store = function(token) {
      $window.sessionStorage.token = token;
    };

    this.deleteToken = function() {
      delete $window.sessionStorage.token;
    };

    this.fetchToken = function() {
      return $window.sessionStorage.token;
    };

    this.getDecodedToken = function() {
      var token = this.fetchToken();
      if (token) {
        return jwtHelper.decodeToken(this.fetchToken());
      }
    };
  }

  TokenRepository.$inject = ['$window', 'jwtHelper'];
})();
