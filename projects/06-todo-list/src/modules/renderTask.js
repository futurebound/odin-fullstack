"use strict";

import Task from "../classes/Task.js";

const renderTask = (task) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const title = document.createElement("span");
  title.textContent = task.getTitle();

  const dueDate = document.createElement("p");
  dueDate.textContent = task.getDueDate();

  taskDiv.appendChild(title);
  taskDiv.appendChild(dueDate);

  return taskDiv;
}

export default renderTask;