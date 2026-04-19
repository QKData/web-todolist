// src/index.js
import { Todo } from './todo.js';
import { AppController } from './appController.js';
import { DOM } from './dom.js';

// // 1. Get the list of projects (currently just "Inbox")
// const myProjects = AppController.getProjects();
// const inbox = myProjects[0];

// // 2. Create a new Todo
// const task1 = Todo("Finish Odin Project", "Complete the JS path", "2026-05-01", "High");
// const task2 = Todo("Buy Groceries", "Milk, Eggs, Bread", "2026-04-20", "Low");

// // 3. Add Todos to the Inbox project
// inbox.addTodo(task1);
// inbox.addTodo(task2);

// // 4. Create a brand new project
// AppController.addProject("Fitness");
// const fitnessProject = myProjects[1];
// const workoutTask = Todo("Go for a run", "5 kilometers", "Today", "Medium");
// fitnessProject.addTodo(workoutTask);

// // 5. Test to see if it worked!
// console.log(AppController.getProjects());

// Setup some dummy data so we have something to draw
const myProjects = AppController.getProjects();
const inbox = myProjects[0];
const task1 = Todo("Finish Odin Project", "Complete the JS path", "2026-05-01", "High");
inbox.addTodo(task1);

// Draw the UI!
DOM.renderProjects(myProjects);
DOM.renderTodos(inbox);