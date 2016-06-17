angular.module("brimApp")
.factory('locationFactory', function() {
  var photoLocations = [{
    name: 'London Eye',
    caption: 'so many tourists',
    lat: 51.5033,
    lng: -0.1195,
    url: 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg'
  }, {
    name: 'Westminster',
    caption: 'Blah blah blah',
    lat: 51.4993,
    lng: -0.1273,
    url: 'https://i.ytimg.com/vi/-pzckbNyqfc/hqdefault.jpg'
  }, {
    name: 'Trafalgar Square',
    caption: 'so many pigeons',
    lat: 51.5080,
    lng: -0.1281, 
    url: 'http://46mbk22zqw0136sbkcey5gbxrv.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/beach-umbrella.jpg'
  }, {
    name: 'Kensington Palace',
    caption: 'so much money',
    lat: 51.5058,
    lng: -0.1877, 
    url: 'http://media4.s-nbcnews.com/i/newscms/2015_46/855171/prince-george-today-tease-151111_a2e1b23a653cccde6d5fa161550e4151.jpg'
  }];
  
  return photoLocations;
})
