'use strict';

angular.module('blab')
  .service('SessionService', SessionService);

function SessionService(TokenRepository) {
  this.userLoggedIn = function() {
    return !!TokenRepository.getDecodedToken();
  };
}