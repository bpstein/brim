describe("brimApp", function() {

  // var mock = require('protractor-http-mock');
  // var data = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];
  //
  // beforeEach(function(){
  //   mock([{
  //     request: {
  //       path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
  //       method: 'GET'
  //     },
  //     response: {
  //       data: data
  //     }
  //   }]);
  // });
  //
  // afterEach(function(){
  //   mock.teardown();
  // });

  it("should get home page title", function() {
    browser.get('/')
    expect(browser.getTitle()).toEqual("Brim Photo Search")
  });

  it('should allow you to search for hashtags')
  browser.get('/')
  $('#searchTags').sendKeys('cat')
  $('#searchTagsubmit').click()
  expect($$('#returnedTags').first().getText()).toMatch('cat')
  expect($$('#returnedTags').last().getText()).toMatch('cat')
});
