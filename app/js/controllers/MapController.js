angular.module("brimApp")
.controller('MapCtrl', function($scope, $element, locationFactory) {
  const mapEl = $element.find('gmap')[0];
  const mapOptions = {
    zoom: 13,
    center: {lat: 51.5020,lng: -0.1281}, 
  };
  const gmap = new google.maps.Map(mapEl, mapOptions);
  $scope.gmap = gmap;
  $scope.locations = locationFactory;
})