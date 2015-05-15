todoList.controller('ItemAdderController', function() {
  var self = this;

  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({'taskName' : this.newTask, 'isComplete': false });
  };

  self.totalTasks = function() {
    return self.taskList.length;
  };

  self.completeTask = function(item) {
    item.isComplete = true;
  };

});