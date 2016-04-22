(function () {
  'use strict';

  angular.module('blab')
    .service('TokenRepository', TokenRepository);

  function TokenRepository($localForage) {
    var TOKEN_KEY = 'jwt';

    this.store = function(token) {
      return $localForage.setItem(TOKEN_KEY, token);
    },
    this.fetchToken = function() {
      return $localForage.getItem('jwt');
    }
  }

})();
