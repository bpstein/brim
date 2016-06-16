angular.module("brimApp")
.factory('locationFactory', function() {
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  const photoLocations = [{
    name: 'London Eye',
    color: 'darkblue',
    lat: 51.5033,
    lng: -0.1195
  },{
    name: 'Westminster',
    color: 'green',
    lat: 51.4993,
    lng: -0.1273
  },{
    name: 'Trafalgar Square',
    color: 'fuchsia',
    lat: 51.5080,
    lng: -0.1281
  }];
  
  return photoLocations;
})