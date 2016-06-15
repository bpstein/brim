angular.module("brimApp")
  .controller("brimAppController", [function() {
    var self = this;

    self.greeting = "Hello, world";
  }])

  .controller("geolocationController", function(NgMap) {
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  });
