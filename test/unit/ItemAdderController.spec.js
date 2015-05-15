describe('ItemAdderController', function() {
  beforeEach(module('Lister'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ItemAdderController');
  }));

  it('initialises with an empty todo list', function() {
    expect(ctrl.taskList).toEqual([]);
  });

  describe('when adding a new tasks', function() {

    var tasks = [{"detail":"Go Shopping"},{"detail":"wash the car"}];

    beforeEach(function() {
      ctrl.newTask = 'Go shopping';
      ctrl.addTask();
    });

    it('adds a newly added task', function() {
      expect(ctrl.taskList[0].taskName).toEqual('Go shopping');
    });

    it('marks the task as incomplete', function() {
      expect(ctrl.taskList).toEqual([{'taskName': 'Go shopping', 'complete': false }])

    });

  });

});