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
    var vm = this;
      vm.message = 'You can not hide. :)';
      NgMap.getMap().then(function(map) {
      vm.map = map;
    });
    vm.callbackFunc = function(param) {
      console.log('I know where' + param + 'are.' + vm.message);
      console.log('You are at' + vm.map.getCenter());
    };
  });


