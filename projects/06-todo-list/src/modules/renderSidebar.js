"use strict";

const renderSidebar = () => {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");
  const sidebarTitle = document.createElement("h1");
  sidebarTitle.textContent = "Sidebar";
  sidebarDiv.appendChild(sidebarTitle);

  // for each Project
    // display Project.title with a click listener to render that project

  return sidebarDiv;
}

export default renderSidebar;