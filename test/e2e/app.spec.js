describe("brimApp", function() {

  var mock = require('protractor-http-mock');
  var data = [{name: 'cat'}, {name: 'catamaran'}, {name: 'catnip'}];

  beforeEach(function(){
    mock([{
      request: {
        path: 'https://api.instagram.com/v1/tags/search?q=cat&access_token=3414423759.9460433.24ba738c23824cbd82e82201dc10dc57&callback=JSON_CALLBACK',
        method: 'JSONP'
      },
      response: {
        data: data
      }
    }]);
  });

  afterEach(function(){
    mock.teardown();
  });

  it("should get home page title", function() {
    browser.get('/')
    expect(browser.getTitle()).toEqual("Brim Photo Search")
  });

  it('should allow you to search for hashtags', function(){
    browser.get('/')
    $('#searchTags').sendKeys('cat')
    $('#searchTagSubmit').click()
    var tags = $$('#tags span');
    expect(tags.first().getText()).toMatch('cat')
    expect(tags.last().getText()).toMatch('cat')
  })

  // it('should allow you to search for an image by hashtag', function(){
  //  browser.get('/')
  //  $('#searchTags').sendKeys('cat')
  //  $('#searchImageSubmit').click()
  //  expect(element(by.id('recaptcha_image')).isPresent()).toBe(true);
  //  mypic = element(by.css("img[src*='mypic.png']"));
  //  expect(mypic).isPresent()).toBe(true);
  // })

});
