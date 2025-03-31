import Task from "./Task.js";

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(title) {
    this.tasks = this.tasks.filter(task => task.title !== title);
  }

  listTasks() {
    this.tasks.forEach(task => {
      console.log(`${task.title} - ${task.completed ? "Hotovo" : "Neuděláno"}`);
    });
  }
}

export default TaskList;
