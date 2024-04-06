"use strict";

import './style.css';
import renderApp from './modules/appController';


if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
} else if (process.env.NODE_ENV === 'production') {
  console.log('We are in production mode!');
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});