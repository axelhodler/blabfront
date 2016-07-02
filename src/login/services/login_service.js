(function () {
  'use strict';

  angular.module('blab')
    .service('LoginService', LoginService);

  function LoginService($http, REST_API_URL) {
    this.login = function(mail, password) {
      return $http.post(REST_API_URL + '/auth', {
          'email': mail,
          'password': password
        }
      );
    };
  }

  LoginService.$inject = ['$http', 'REST_API_URL'];
})();
