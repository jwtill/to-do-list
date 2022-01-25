function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};


ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

ToDoList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};
//business logic for tasks
function Task(task1, task2, task3) {
  this.task1 = task1;
  this.task2 = task2;
  this.task3 = task3;
}
//User Interface Logic---
// function displayTaskDetails(toDoListToDisplay) {
//   let taskslist = $("ul#tasks");
//   let htmlForTaskinfo = "";
//   Object.keys(toDoListTodisplay.tasks).forEach(function(key){
//     const task = toDoListToDisplay.findTask(key);
//     htmlForTaskInfo += "li id=" + task.id + ">" + task.task1 + " " + task.task2 +
//   }
  
//   )
// } inputted

$(document.ready).ready(function() {
  $("form#new-tasks").submit(function(event) {
    event.preventDefault();
    const task1 = $("#new-task1").val();
    const task2 = $("#new-task2").val();
    const task3 = $("#new-task3").val();
    let newTask = new task(inputtedTask1, inputtedTask2, inputtedTask3);
    ToDoList.addTask(newTask);
    displayTaskDetails(toDoList);
  });
});
