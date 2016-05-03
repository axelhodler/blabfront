(function () {
  'use strict';

  angular.module('blab')
    .service('TokenRepository', TokenRepository);

  function TokenRepository($localForage, $window) {
    var TOKEN_KEY = 'jwt';

    this.store = function(token) {
      $window.sessionStorage.token = token;
      return $localForage.setItem(TOKEN_KEY, token);
    };

    this.fetchToken = function() {
      return $localForage.getItem('jwt');
    };
  }

})();
