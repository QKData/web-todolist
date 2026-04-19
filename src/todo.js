// src/todo.js
export const Todo = (title, description, dueDate, priority) => {
  let isCompleted = false;

  const toggleComplete = () => {
    isCompleted = !isCompleted;
  };

  const getStatus = () => isCompleted;

  // Return the public methods and properties
  return { title, description, dueDate, priority, toggleComplete, getStatus };
};