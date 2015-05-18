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
      expect(element(by.repeater('(key, task) in ctrl.taskList')).getText()).toContain('clean car');
    });

    it('displays the total number of tasks', function() {
      element(by.model('ctrl.newTask')).sendKeys('clean car');
      element(by.id('create-task')).click();
      expect(element(by.id('task-number')).getText()).toContain("1");
    });

    it('marks the task as incomplete', function() {
      element(by.model('ctrl.newTask')).sendKeys('clean car');
      element(by.id('create-task')).click();
      expect(element(by.model('completed')).isSelected()).toBe(false);
    });
  });

  describe('updating an task', function() {
    it('marking a task completeby ticking on a checkbox', function() {
      element(by.model('ctrl.newTask')).sendKeys('clean car');
      element(by.id('create-task')).click();
      element(by.model('completed')).click();
      expect(element(by.id('finished-number')).getText()).toContain("1");
    });

    it('removing a task', function() {
      element(by.model('ctrl.newTask')).sendKeys('clean car');
      element(by.id('create-task')).click();
      element(by.model('completed')).click();
      element(by.model('delete')).click();
      expect(element(by.className('list-group')).getText()).toNotContain('clean car');
    });
  });

});