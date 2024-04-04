"use strict";

const renderSidebar = () => {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");
  const sidebarTitle = document.createElement("h1");
  sidebarTitle.textContent = "Sidebar";
  sidebarDiv.appendChild(sidebarTitle);

  return sidebarDiv;
}

export default renderSidebar;