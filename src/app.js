'use strict';

angular.module('blab', [
  'ngRoute',
  'angular-jwt'
])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/session/templates/login_form',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/ledger', {
        templateUrl: 'src/ledger/templates/overview',
        controller: 'BlabController',
        controllerAs: 'overview'
      })
      .when('/ledger/:id', {
        templateUrl: 'src/ledger/templates/detail',
        controller: 'LedgerDetailController',
        controllerAs: 'detail'
      });
  }])

  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  }])

  .constant('REST_API_URL', 'http://localhost:3000');