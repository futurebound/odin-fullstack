"use strict";
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
} else if (process.env.NODE_ENV === 'production') {
  console.log('We are in production mode!');
}

const containerDiv = document.getElementById("container");
// const title = document.createElement("h1");
// title.textContent = "Welcome to Todo App";
// containerDiv.appendChild(title);

const sidebarDiv = document.createElement("div");
sidebarDiv.classList.add("sidebar");
const sidebarTitle = document.createElement("h1");
sidebarTitle.textContent = "Sidebar";
sidebarDiv.appendChild(sidebarTitle);

const contentDiv = document.createElement("div");
contentDiv.classList.add("content");
const contentTitle = document.createElement("h1");
contentTitle.textContent = "Content";
contentDiv.appendChild(contentTitle);


containerDiv.appendChild(sidebarDiv);
containerDiv.appendChild(contentDiv);