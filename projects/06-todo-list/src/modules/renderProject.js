"use strict";

import Project from "../classes/Project.js";
import renderTask from "./renderTask.js";

const renderProject = (project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const title = document.createElement("h2");
  title.textContent = project.title;

  const tasksDiv = document.createElement("div");
  tasksDiv.classList.add("tasks");
  const tasks = project.tasks;
  tasks.forEach(task => {
    console.log(task);
    const taskDiv = renderTask(task);
    tasksDiv.appendChild(taskDiv);
  });

  projectDiv.appendChild(title);
  projectDiv.appendChild(tasksDiv);

  return projectDiv;
}

export default renderProject;