angular.module("brimApp")
.controller('MapCtrl', function($rootScope, $scope, $element, locationFactory, NgMap, infoTransferService, mapMarkerService) {
  var mapEl = $element.find('gmap')[0];
  var mapOptions = {
    zoom: 13,
    center: {lat: 51.5020,lng: -0.1281},
    enableHighAccuracy: true
  };

  var gmap = new google.maps.Map(mapEl, mapOptions);
  $scope.gmap = gmap;
  $scope.locations = infoTransferService.info;


  $scope.clear = function() {
    mapMarkerService.clearMap()
  }

})
