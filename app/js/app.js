'use strict';

var brimApp = angular.module("brimApp", ['ui.router', 'satellizer']);

brimApp.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  // Sattelizer config specifying which API
  // router JWT should be retrieved from
  $authProvider.loginUrl = '/api/authenticate';
  $authProvider.baseUrl = 'http://localhost:3000/'
  $authProvider.signupUrl = ''
  $authProvider.instagram({
    clientId: '35866d92eca64c689c7404d08aead995'
  });

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
