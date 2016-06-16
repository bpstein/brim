describe("brimAppController", function() {

  beforeEach(module("brimApp"));

  var ctrl;
  var httpBackend, scope;
  var data = [{name: 'cat'}, {name: 'catamaran'}, {name: 'catnip'}];
  var response1 = {
    meta: 200,
    data: ''
  }
  var response2 = {
    meta: 300,
    data: ''
  }


  beforeEach(inject(function($rootScope, $controller,GetTagsService,$httpBackend){
    scope = $rootScope.$new();
    service = GetTagsService;

    ctrl = $controller('brimAppController', {
        $scope: scope,
        GetTagsService: service
    });
    spyOn(ctrl,'getResponseSuccess').and.returnValue();
    httpBackend = $httpBackend;
    httpBackend.expect('JSONP','https://api.instagram.com/v1/tags/search?q=cat&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK').respond(data);
  }));

  it('gets all tags associated with a given tag', function() {
    ctrl.getTags('cat');
    expect(ctrl.tags).toEqual(data.data);
    httpBackend.flush();
  });
});
