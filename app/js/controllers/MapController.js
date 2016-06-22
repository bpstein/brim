angular.module("brimApp")
.controller('MapCtrl', function($scope, $element, locationFactory, NgMap) {
  var mapEl = $element.find('gmap')[0];
  var mapOptions = {
    zoom: 13,
    center: {lat: 51.5020,lng: -0.1281}, 
    enableHighAccuracy: true
  };

  var gmap = new google.maps.Map(mapEl, mapOptions);

  // var mapStyles = [
  
  // ];

  gmap.set('styles', [
  {
      "featureType": "administrative",
      "stylers": [
        { "visibility": "on" }
      ]
    },{
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "transit",
      "stylers": [
        { "visibility": "on" }
      ]
    },{
      "featureType": "road",
      "stylers": [
        { "color": "#333", 
          "visibility": "on"
        }
      ]
    },{
      "featureType": "landscape",
      "stylers": [
        { "color": "#e3f2f5", 
          "visibility": "on"
       }
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "visibility": "on" },
        { "color": "#f3feff" }
      ]
    }
]);



  $scope.gmap = gmap;
  $scope.locations = locationFactory;
})