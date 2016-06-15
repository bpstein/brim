describe("brimAppController", function() {

  beforeEach(module("brimApp"));

  var ctrl;
  var service;
  var httpbackend;
  var data = [{name: 'cat'}, {name: 'catamaran'}, {name: 'catnip'}]

  beforeEach(inject(function($controller,GetTagsService,$httpBackend){
    ctrl = $controller('brimAppController');
    service = GetTagsService;
    httpbackend = $httpBackend;
    httpbackend.expect('JSONP','https://api.instagram.com/v1/tags/search?q=cat&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK').respond(data);
    httpbackend.flush();
  }));

  it('gets all tags associated with a given tag', function() {
    ctrl.getTags('cat')
    expect(ctrl.tags).toEqual(data)
  });

});
