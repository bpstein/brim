describe('MapController', function() {

  beforeEach(module('brimApp'));
  var ctrl, LocationFactory;
  
  beforeEach(inject(function($controller, LocationFactory){
    ctrl = $controller('MapController');
  }));

  it('initializes with several locations', function() {
    // var location1 = new LocationFactory("location1");
    // var location2 = new LocationFactory("location2");
  });

});