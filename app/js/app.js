var brimApp = angular.module("brimApp", ["ngMap"])

.directive('mapMarker', function () {
  return {
    restrict: 'E',
    controller: 'MapMarkerCtrl'
  };
})


    

