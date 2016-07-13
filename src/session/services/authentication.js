(function () {
  'use strict';

  angular.module('blab')
    .service('Authentication', Authentication);

  function Authentication($http, REST_API_URL) {
    this.login = function(mail, password) {
      return $http.post(REST_API_URL + '/auth', {
          'email': mail,
          'password': password
        }
      );
    };
  }

  Authentication.$inject = ['$http', 'REST_API_URL'];
})();
