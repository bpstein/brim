'use strict';

var brimApp = angular.module("brimApp", ['ui.router', 'satellizer']);

angular.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  // Sattelizer config specifying which API
  // router JWT should be retrieved from
  $authProvider.loginUrl = '/api/authenticate';

  // Redirect to the auth state if any other state
  // are requested other than users
  $urlRouterProvider.otherwise('/auth');

  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: '../views/authView.html',
      controller: 'AuthController as auth'
    })
    .state('users', {
      url: '/users',
      templateUrl: '../views/users/userView.html',
      controller: 'UserController as user'
    });
});
