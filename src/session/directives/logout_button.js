'use strict';

angular.module('blab')
  .directive('blabLogoutButton', LogoutButton);

function LogoutButton(LogoutService) {
  return {
    templateUrl: 'src/session/directives/templates/logout_button.html',
    link: function() {
      LogoutService.logout();
    }
  };
}