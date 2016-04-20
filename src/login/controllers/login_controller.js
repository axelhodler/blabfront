'use strict';

angular.module('blab')
  .controller('LoginController', LoginController);

function LoginController($http, TokenRepository, REST_API_URL, $location) {
  this.login = function () {
    $http.post(REST_API_URL + '/auth', {
        'email': this.username,
        'password': this.password
      }
    ).then(function (response) {
      TokenRepository.store(response.data);
      $location.path('/ledger');
    });
  }
}
