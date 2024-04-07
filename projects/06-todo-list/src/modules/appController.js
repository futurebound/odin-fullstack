"use strict";

// import renderProject from "./renderProject";
import Project from "../classes/Project";
import Task from "../classes/Task";
import renderTask from "./renderTask";

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

  const projectsHeader = document.createElement("h1");
  projectsHeader.textContent = "My Projects";

  const projectForm = createProjectForm();

  const projectsList = populateProjectList();

  sidebarDiv.appendChild(projectsHeader);
  sidebarDiv.appendChild(projectForm);
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

const renderProject = (project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const title = document.createElement("h2");
  title.textContent = project.getTitle();

  const taskForm = createTaskForm();

  const tasksDiv = document.createElement("div");
  tasksDiv.classList.add("tasks");
  const tasks = project.tasks;
  tasks.forEach(task => {
    // console.log(task);
    const taskDiv = renderTask(task);
    tasksDiv.appendChild(taskDiv);
  });

  projectDiv.appendChild(title);
  projectDiv.appendChild(taskForm);
  projectDiv.appendChild(tasksDiv);

  return projectDiv;
}

const createTaskForm = () => {
  const createTaskDiv = document.createElement("div");
  createTaskDiv.classList.add("create-task");

  const textInput = document.createElement("input");
  textInput.id = "create-task-input";
  textInput.type = "text";
  textInput.placeholder = "Task Title ...";

  const createButton = document.createElement("button");
  createButton.textContent = "Create New Task";
  createButton.addEventListener("click", () => {
    const title = document.getElementById("create-task-input").value;
    console.log(title);
    const task = new Task(title);
    currentProject.addTask(task);
    renderApp();
  });

  createTaskDiv.appendChild(textInput);
  createTaskDiv.appendChild(createButton);
  return createTaskDiv;
}

const createProjectForm = () => {
  const createProjectDiv = document.createElement("div");
  createProjectDiv.classList.add("create-project");

  const textInput = document.createElement("input");
  textInput.id = "create-project-input";
  textInput.type = "text";
  textInput.placeholder = "Project Title ...";

  const createButton = document.createElement("button");
  createButton.textContent = "Create New Project";
  createButton.addEventListener("click", () => {
    const title = document.getElementById("create-project-input").value;
    console.log(title);
    const project = new Project(title);
    projects.push(project);
    renderApp();
  });

  createProjectDiv.appendChild(textInput);
  createProjectDiv.appendChild(createButton);
  return createProjectDiv;
}

const populateProjectList = () => {
  const projectsList = document.createElement("div");
  projectsList.classList.add("sidebar-list");

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

  return projectsList;
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