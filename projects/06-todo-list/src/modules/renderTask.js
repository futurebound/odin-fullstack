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
  title.classList.add("task-title");
  title.textContent = task.getTitle();
  taskDiv.appendChild(title);

  if (task.hasDueDate()) {
    const dueDate = document.createElement("p");
    dueDate.textContent = task.getDueDate();
    taskDiv.appendChild(dueDate);
  }

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>`;
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent click listener on parent div from firing
    const targetIndex = e.currentTarget.parentElement.dataset.index; // e.currentTarget only focuses on event listener element
    renderApp();
  });

  taskDiv.appendChild(deleteButton);


  return taskDiv;
}

export default renderTask;