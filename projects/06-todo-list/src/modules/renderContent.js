"use strict";

const renderContent = () => {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  const contentTitle = document.createElement("h1");
  contentTitle.textContent = "Content";
  contentDiv.appendChild(contentTitle);

  return contentDiv;
}

export default renderContent;