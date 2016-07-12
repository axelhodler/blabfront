'use strict';

angular.module('blab')
  .service('SessionService', SessionService);

function SessionService() {
  this.userLoggedIn = function() {
    return false;
  };
}