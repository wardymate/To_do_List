describe('ItemAdderController', function() {
  beforeEach(module('Lister'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ItemAdderController', {
        $scope: scope
    });
  }));

  it('initialises with an empty todo list', function() {
    expect(scope.taskList).toBeUndefined();
  });

  describe('when adding a new tasks', function() {
    var tasks = [{"detail":"Go Shopping"},{"detail":"wash the car"}];

    it('displays a newly added task', function() {
      expect(scope.taskList.tasks).toEqual(tasks);
    });
  });


});