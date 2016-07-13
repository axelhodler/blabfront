'use strict';

angular.module('blab')
  .service('Login', Login);

function Login($location, TokenRepository, Authentication) {
  this.login = function(username, password) {
    Authentication.login(username, password).then(function (response) {
      TokenRepository.store(response.data);
      $location.path('/ledger');
    });
  };
}

Login.$inject = ['$location', 'TokenRepository', 'Authentication'];
