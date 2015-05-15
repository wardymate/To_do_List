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

    var addSecondTask = function() {
      ctrl.newTask = 'wash the car';
      ctrl.addTask();
    };

    it('adds a newly added task', function() {
      expect(ctrl.taskList[0].taskName).toEqual('Go shopping');
    });

    it('marks the task as incomplete when added', function() {
      expect(ctrl.taskList).toEqual([{'taskName': 'Go shopping', 'isComplete': false }]);
    });

    it('can add multiple tasks', function() {
      addSecondTask();
      expect(ctrl.taskList[1]).toEqual({'taskName': 'wash the car', 'isComplete': false });
    });

    it('knows how many task are in the todo list', function() {
      addSecondTask();
      expect(ctrl.totalTasks()).toEqual(2);
    });

    it('can mark an task as complete', function() {
      ctrl.completeTask(ctrl.taskList[0]);
      expect(ctrl.taskList[0].isComplete).toEqual(true);
    });

    it('knows how many complete tasks are in the todo list', function() {
      addSecondTask();
      ctrl.completeTask(ctrl.taskList[0]);
      expect(ctrl.completedTasks()).toEqual(1);
    });

    it('knows how many uncompleted tasks are in the todo list', function() {
      addSecondTask();
      addSecondTask();
      ctrl.completeTask(ctrl.taskList[0]);
      expect(ctrl.uncompletedTasks()).toEqual(2);
    });


  });

});