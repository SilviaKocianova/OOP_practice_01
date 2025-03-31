import Task from "./models/Task.js";
import TaskList from "./models/TaskList.js";

const myTasks = new TaskList();


const task1 = new Task("go shopping");
const task2 = new Task("walk the dog");

myTasks.addTask(task1);
myTasks.addTask(task2);

task1.toggleComplete();

myTasks.listTasks();
