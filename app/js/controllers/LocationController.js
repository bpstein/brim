angular.module("brimApp")
.controller('LocationsCtrl', function($scope, locationFactory){
  $scope.locations = locationFactory;
})