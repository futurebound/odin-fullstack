"use strict";

class Task {
  constructor(title, dueDate = null, priority = null, project = null, complete = false) {
    this.title = title;
    // this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.complete = complete;
    // this.subtasks = [];
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(date) {
    this.dueDate = date;
  }

  hasDueDate() {
    return this.dueDate !== null;
  }
  
  isComplete() {
    return this.complete;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }
}

export default Task;