angular.module("brimApp")
.controller('MapMarkerCtrl', function($scope, $element, mapMarkerService){
  const latlng = new google.maps.LatLng($scope.location.lat, $scope.location.lng);
  const googleOverlayView = new mapMarkerService.GoogleOverlayView($element, latlng);
  googleOverlayView.setMap($scope.gmap);
})