var brimApp = angular.module("brimApp", ["ngMap", "ngMessages", 'ui.router', 'satellizer'])

.config(function($stateProvider, 
                 $urlRouterProvider, 
                 $authProvider) 
{
  // $authProvider.loginUrl = 'http://localhost:3000/users/auth/instagram';
  $authProvider.instagram({
    clientId: '94604331f352484ebaec0996c28ebc07',
    url: 'http://localhost:3000/users/auth/instagram',
    // redirectUri: 'http://localhost:3000/users/auth/instagram/callback'
  })

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../partials/home.html",
      controller: "HomeController"
    })
    .state('login', {
      url: "/login",
      templateUrl: "../partials/login.html",
      controller: 'AuthController as auth'
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "../partials/dashboard.html",
      controller: 'brimAppController as ctrl'
    });
})

.directive('mapMarker', function () {
  return {
    restrict: 'E',
    controller: 'MapMarkerCtrl'
  };
});

  
