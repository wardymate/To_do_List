describe('To Do List App', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  describe('Loading the page', function() {
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('To Do List');
    });
  });

  describe('Adding a new task', function() {
    it('displays the new task', function() {
      element(by.model('ctrl.newTask')).sendKeys('clean car');
      element(by.id('create-task')).click();
      expect(element(by.repeater('task in ctrl.taskList')).getText()).toContain('clean car');
    });

    it('displays the number of tasks', function() {
      element(by.model('ctrl.newTask')).sendKeys('clean car');
      element(by.id('create-task')).click();
      expect(element(by.id('task-number')).getText()).toContain("1");
    });

  });





});