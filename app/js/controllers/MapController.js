angular.module("brimApp")
.controller('MapCtrl', function($scope, $element, locationFactory) {
  const mapEl = $element.find('gmap')[0];
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  const mapOptions = {
    zoom: 13,
    center: {lat: 51.5020,lng: -0.1281}, 
    icon: iconBase + 'http://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg'
  };
  const gmap = new google.maps.Map(mapEl, mapOptions);
  $scope.gmap = gmap;
  $scope.locations = locationFactory;
})