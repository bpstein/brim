describe("brimAppController", function() {
  var controller;

  beforeEach(module("brimApp"));

  beforeEach(inject(function($controller) {
    controller = $controller("brimAppController");
  }));

  it("makes exposes a greeting of 'Hello, world'", function() {
    expect(controller.greeting).toEqual("Hello, world");
  });
});
