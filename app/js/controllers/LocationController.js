angular.module("brimApp")
.controller('LocationsCtrl', function($scope, testService){
  $scope.locations = testService.info
})