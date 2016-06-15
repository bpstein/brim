describe("brimApp", function() {
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
