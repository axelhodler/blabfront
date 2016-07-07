'use strict';

angular.module('blab')
  .directive('blabLogoutButton', LogoutButton);

function LogoutButton(LogoutService) {
  return {
    template: 'asdf',
    link: function() {
      LogoutService.logout();
    }
  };
}