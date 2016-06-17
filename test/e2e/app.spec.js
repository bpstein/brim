describe("brimApp", function() {

  let photos = element(by.css('#map')).$$('map-marker');
  let listItems = element(by.css('#photo-list')).$$('li');

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Brim Photo Search");
  });

  it("should render a map on the page", function() {
    browser.get('/');
    browser.findElement(by.css('#map'));
  });

  it("should render at least one pin as a photo on the map", function() {
    browser.get('/');
    browser.findElement(by.css('map-marker'));
  });

  it("should print a list of photos below the map", function() {
    browser.get('/');
    browser.findElement(by.css('li'));
  });
});
