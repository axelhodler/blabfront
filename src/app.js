'use strict';

angular.module('blab', [
  'ngRoute'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/login/templates/login_form',
        controller: 'LoginController'
      })
      .when('/ledger', {
        templateUrl: 'src/ledger/templates/overview',
        controller: 'BlabController'
      })
  }]);