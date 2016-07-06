'use strict';

angular.module('blab')
  .service('LogoutService', LogoutService);

function LogoutService($location) {
  this.logout = function() {
    $location.path('/');
  };
}