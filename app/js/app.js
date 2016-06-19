var brimApp = angular.module("brimApp", ["ngMap", "ngRoute", "ngMessages"])

.config(function($routeProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home' {
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


  
