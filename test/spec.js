describe('To Do List App', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  describe('Loading the page', function() {
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('To Do List');
    });

    it('should have an input field', function() {
      element(by.model('ctrl.newTask')).sendKeys('clean car');
      element(by.id('create-task')).click();
      expect(element(by.repeater('task in ctrl.taskList')).getText()).toContain('clean car');
    });


  });

});