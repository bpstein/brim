describe('GetTagsService', function(){

	beforeEach(module('brimApp'));

	var factory;
	var httpbackend;

	var data = [{name: "cat"}];

	beforeEach(inject(function(GetTagsService,$httpBackend){
		factory = GetTagsService;
		httpbackend = $httpBackend;
	}));

	it('should return a promise of the data from the API',function(){
		httpbackend.expect('JSONP','https://api.instagram.com/v1/tags/search?q=cat&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK'
  ).respond(data);
		factory.get('cat').then(function(response){
			expect(response.data).toEqual(data)
		});
		httpbackend.flush();
	});

});

//change access_token to environment variable
