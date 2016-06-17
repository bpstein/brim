angular.module("brimApp")
.controller('LocationsCtrl', function($scope, infoTransferService){
  $scope.locations = infoTransferService.info
})