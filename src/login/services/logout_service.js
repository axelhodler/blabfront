'use strict';

angular.module('blab')
  .service('LogoutService', LogoutService);

function LogoutService($location, TokenRepository) {
  this.logout = function() {
    TokenRepository.deleteToken();
    $location.path('/');
  };
}