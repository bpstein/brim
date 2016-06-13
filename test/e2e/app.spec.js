describe("brimApp", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Brim Photo Search");
  });
});
