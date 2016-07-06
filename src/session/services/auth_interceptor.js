(function () {
  'use strict';

  angular.module('blab')
    .factory('authInterceptor', ['TokenRepository', function (TokenRepository) {
      return {
        request: function (config) {
          config.headers = config.headers || {};
          var token = TokenRepository.fetchToken();
          if (token) {
            config.headers.Authorization = token;
          }
          return config;
        }
      };
  }]);

})();
