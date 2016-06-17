'use strict';

var brimApp = angular.module("brimApp", ['ui.router', 'satellizer']);

brimApp.config(function($stateProvider, 
                        $urlRouterProvider, 
                        $authProvider, 
                        $locationProvider) 
{

  $locationProvider.html5Mode(true);

  // Sattelizer config specifying which API
  // router JWT should be retrieved from
  // $authProvider.loginUrl = '/api/authenticate';
  $authProvider.instagram({
    clientId: '94604331f352484ebaec0996c28ebc07'
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
    })
    .state('login', {
      url: '/auth/instagram',
      templateUrl: '../tempaltes/dashboard.tpl.html',
      controller: 'DashboardController as dashboard'
    })
});
