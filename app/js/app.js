'use strict';

var brimApp = angular.module("brimApp", ['ui.router', 'satellizer']);

brimApp.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  // Sattelizer config specifying which API
  // router JWT should be retrieved from
  $authProvider.loginUrl = '/api/authenticate';

  // Redirect to the auth state if any other state
  // are requested other than users
  $urlRouterProvider.otherwise('/auth');

  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: '../templates/login.tpl.html',
      controller: 'AuthController as auth'
    })
    .state('dashboard', {
      url: 'dashboard',
      templateUrl: '../templates/dashboard.tpl.html',
      controller: 'DashboardController as dashboard'
    });
});
