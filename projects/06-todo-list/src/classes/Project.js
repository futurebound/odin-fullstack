"use strict";


class Project {
  constructor(title, description, tasks=[]) {
    this.title = title;
    this.description = description;
    this.tasks = tasks;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  addTask(task) {
    this.tasks.unshift(task);
  }

  deleteTask(index) {
    this.tasks = this.tasks.toSpliced(index, 1);
  }
}

export default Project;