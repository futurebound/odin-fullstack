"use strict";
import './style.css';
import renderSidebar from './modules/renderSidebar';
import renderContent from './modules/renderContent';


if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
} else if (process.env.NODE_ENV === 'production') {
  console.log('We are in production mode!');
}

const containerDiv = document.getElementById("container");
const sidebarDiv = renderSidebar();
const contentDiv = renderContent();

// on initial page load (likely changes with localstorage)
//  we want to load the "default" project


containerDiv.appendChild(sidebarDiv);
containerDiv.appendChild(contentDiv);