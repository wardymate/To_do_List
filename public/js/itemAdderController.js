todoList.controller('ItemAdderController', function() {
  var self = this;

  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({'taskName' : this.newTask, 'complete': false });
  };

  self.totalTasks = function() {
    return self.taskList.length;
  };

});