angular.module("brimApp")
.factory('locationFactory', function() {
  const photoLocations = [{
    name: 'London Eye',
    color: 'darkblue',
    lat: 51.5033,
    lng: -0.1195,
    url: 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg'
  },{
    name: 'Westminster',
    color: 'green',
    lat: 51.4993,
    lng: -0.1273,
    url: 'http://i.imgur.com/Q3cUg29.gif?fb'
  },{
    name: 'Trafalgar Square',
    color: 'fuchsia',
    lat: 51.5080,
    lng: -0.1281, 
    url: 'http://46mbk22zqw0136sbkcey5gbxrv.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/beach-umbrella.jpg'
  }];
  
  return photoLocations;
})