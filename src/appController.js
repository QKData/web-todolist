// src/appController.js
import { Project } from './project.js';

export const AppController = (() => {
  const projects = [];
  
  // Create a default project immediately
  const defaultProject = Project("Inbox");
  projects.push(defaultProject);

  const addProject = (name) => {
    const newProject = Project(name);
    projects.push(newProject);
  };

  const getProjects = () => projects;

  return { addProject, getProjects };
})();