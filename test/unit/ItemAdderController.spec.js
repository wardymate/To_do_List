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

    it('displays a newly added task', function() {
      ctrl.newTask = 'Go shopping';
      ctrl.addTask();
      expect(ctrl.taskList).toEqual([{'taskName' : 'Go shopping'}]);
    });

  });

});