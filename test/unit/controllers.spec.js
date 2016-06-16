describe("brimAppController", function() {

  beforeEach(module("brimApp"));

  var ctrl;
  var httpBackend, scope;
  var data = [{name: 'cat'}, {name: 'catamaran'}, {name: 'catnip'}];
  var response1 = {
    meta: {code: 400, error_message: "Bad Request"},
    data: ''
  }
  var response2 = {
    meta: {code: 200},
    data: ''
  }



  beforeEach(inject(function($rootScope, $controller,GetTagsService,$httpBackend){
    scope = $rootScope.$new();
    service = GetTagsService;
    ctrl = $controller('brimAppController', {
        $scope: scope,
        GetTagsService: service
    });
    httpBackend = $httpBackend;
    httpBackend.expect('JSONP','https://api.instagram.com/v1/tags/search?q=cat&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK').respond(data);
  }));

  it('gets all tags associated with a given tag', function() {
    spyOn(ctrl,'getResponseSuccess').and.returnValue();
    ctrl.getTags('cat');
    expect(ctrl.tags).toEqual(data.data);
    httpBackend.flush();
  });

  it("returns an error if the server didn't respond with a success", function() {
    ctrl.getResponseSuccess(scope, response1, "This hashtag has returned no results");
    expect(scope.error).toEqual("Bad Request");
  })

  it("returns an error if the search tag returns no results from the server", function() {
    ctrl.getResponseSuccess(scope, response2, "This hashtag has returned no results");
    expect(scope.error).toEqual("This hashtag has returned no results");
  })
});
