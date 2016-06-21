brimApp.controller('AuthController', function($http, $scope, $window, $location, $rootScope, $auth, $http) {

  $scope.handlePopupAuthentication = function handlePopupAuthentication(network, account) {
    $scope.$apply(function() {
      $scope.applyNetwork(network, account);
    });
  }

  $scope.authNetwork = function authNetwork(network) {
    var openUrl = 'http://localhost:3000/users/auth/' + network + '?client_id=' + "94604331f352484ebaec0996c28ebc07" + "&redirect_uri=" + "http://localhost:3000/users/auth/instagram/callback" + "&response_type=code";
    window.$windowScope = $scope;
    var popupUrl
    popupUrl = window.open(openUrl, 'Authenticate Account', "width=500, height=500");
    (function() {
        return $http.get(openUrl).then(function(response){
          return response

        });
      })().then(function(response){
        // console.log(response)
        console.log(popupUrl.location.href)
        // console.log(windy.body.innerHTML);
        // console.log(popupUrl);
        // window.close();
    })
  };

  // $scope.instagramLogin = function() {
  //   $auth.authenticate('instagram')
  //     .then(function(response) {
  //       console.log(response);
  //       $window.localStorage.currentUser = JSON.stringify(response.data.user);
  //       $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
  //     })
  //     .catch(function(response) {
  //       console.log(response.data);
  //     });
  // };

  // $scope.emailLogin = function() {
  //   $auth.login({ email: $scope.email, password: $scope.password })
  //     .then(function(response) {
  //       $window.localStorage.currentUser = JSON.stringify(response.data.user);
  //       $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
  //     })
  //     .catch(function(response) {
  //         $scope.errorMessage = {};
  //         angular.forEach(response.data.message, function(message, field) {
  //           $scope.loginForm[field].$setValidity('server', false);
  //           $scope.errorMessage[field] = response.data.message[field];
  //         });
  //     });
  // };

});