describe('To Do List App', function() {

  describe('Loading the page', function() {
    it('should have a title', function() {
      browser.get('http://localhost:3000');
      expect(browser.getTitle()).toEqual('To Do List');
    });

    // It ("should have an input field", function() {
    //   browser.get('http://localhost:3000');
    // });


  });

});