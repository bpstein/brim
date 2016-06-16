'use strict';

brimApp.controller('AuthController', AuthController);

function AuthController($auth, $state) {

  var vm = this;

  vm.authenticate = function(provider) {
    $auth.authenticate(provider);
  }

  vm.isAuthenticated = function() {
    return $auth.isAuthenticated();
  }

  vm.login = function() {

    var credntials = {
      email: vm.username,
      password: vm.password
    }

    // Use Satellizer's $auth service to login
    $auth.login(credntials).then(function(data) {
      // If login is successful, redirect to the users state
      $state.go('dashboard', {});
    });
  }
};