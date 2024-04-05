"use strict";

import Task from "./Task.js";

class Project {
  constructor(title, description, tasks=[]) {
    this.title = title;
    this.description = description;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

export default Project;