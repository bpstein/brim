describe('AuthController', function() {
  beforeEach(module('brimApp'));

  var controller, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('AuthController', {
      $scope: scope
    });
    controller
  }));

  it('initialises with alerts', function() {

  })
});