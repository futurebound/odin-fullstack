"use strict";

import Project from "../classes/Project.js";
import Task from "../classes/Task.js";
import renderProject from "./renderProject";

const renderContent = () => {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  
  //TEST
  let tasks = [];
  tasks.push(new Task("eat"));
  tasks.push(new Task("sleep"));

  const project = new Project("inbox", "default project", tasks);
  const projectDiv = renderProject(project);
  contentDiv.appendChild(projectDiv);

  return contentDiv;
}

export default renderContent;