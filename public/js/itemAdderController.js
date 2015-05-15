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

  self.completedTasks = function() {
    function completed(task){
      return task.isComplete === true;
    }
    return self.taskList.filter(completed).length;
  };

  self.uncompletedTasks = function() {
    function uncompleted(task){
      return task.isComplete === false;
    }
    return self.taskList.filter(uncompleted).length;
  };

});