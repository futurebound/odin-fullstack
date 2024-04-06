"use strict";

import Task from "../classes/Task.js";

const renderTask = (task) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  if (task.isComplete()) {
    taskDiv.classList.add("complete");
  } else {
    taskDiv.classList.add("incomplete");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      task.setComplete(true);
      taskDiv.classList.replace("incomplete", "complete");
    } else {
      task.setComplete(false);
      taskDiv.classList.replace("complete", "incomplete");
    }
    task.toggleComplete();
  });
  taskDiv.appendChild(checkbox);

  const title = document.createElement("span");
  title.textContent = task.getTitle();
  taskDiv.appendChild(title);

  if (task.hasDueDate()) {
    const dueDate = document.createElement("p");
    dueDate.textContent = task.getDueDate();
    taskDiv.appendChild(dueDate);
  }

  return taskDiv;
}

export default renderTask;