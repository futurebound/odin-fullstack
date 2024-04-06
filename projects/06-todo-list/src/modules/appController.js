"use strict";

import renderProject from "./renderProject";
import Project from "../classes/Project";
import Task from "../classes/Task";

// import renderSidebar from './renderSidebar';
// import renderContent from './renderContent';

const containerDiv = document.getElementById("container");
let projects = [];
let currentProject = null;

const renderApp = () => {
  containerDiv.replaceChildren(); // clear container
  const sidebarDiv = renderSidebar();
  const contentDiv = renderContent();
  
  // on initial page load (likely changes with localstorage)
  //  we want to load the "default" project
  
  containerDiv.appendChild(sidebarDiv);
  containerDiv.appendChild(contentDiv);
}

const renderSidebar = () => {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");

  const projectsList = document.createElement("div");
  projectsList.classList.add("sidebar-list");

  const projectsHeader = document.createElement("h1");
  projectsHeader.textContent = "My Projects";

  // for each Project
    // display Project.title with a click listener to render that project
  projects.forEach((project, projectIndex) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("sidebar-project");

    projectDiv.dataset.index = projectIndex;

    projectDiv.addEventListener("click", (e) => {
      const targetIndex = e.currentTarget.dataset.index;
      currentProject = projects[targetIndex];
      renderApp(); // re-render app
    });
    projectDiv.textContent = project.getTitle();

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>`;
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent click listener on parent div from firing
      const targetIndex = e.currentTarget.parentElement.dataset.index; // e.currentTarget only focuses on event listener element
      // const target = e.target
      projects = projects.toSpliced(targetIndex, 1); // remove
      currentProject = projects.length > 0 ? projects[0] : null;
      renderApp();
    });
    projectDiv.appendChild(deleteButton);

    projectsList.appendChild(projectDiv);
  });
  
  sidebarDiv.appendChild(projectsHeader);
  sidebarDiv.appendChild(projectsList);

  return sidebarDiv;
}

const renderContent = () => {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  
  if (currentProject != null) {
    const projectDiv = renderProject(currentProject);
    contentDiv.appendChild(projectDiv);
  }

  return contentDiv;
}

const createDefaultProject = () => {
  const tasks = [];
  tasks.unshift(new Task("eat"));
  tasks.unshift(new Task("sleep"));
  const project = new Project("inbox", "default project", tasks);
  projects.unshift(project);
  currentProject = project;
}

createDefaultProject();
renderApp();

export default renderApp;