"use strict";

// require("dotenv").config();
// const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

let GIPHY_API_KEY = prompt("enter your GIPHY API key");

const img = document.querySelector('img');
const imgButton = document.getElementById("img-button");
const searchInput = document.getElementById("search");

imgButton.addEventListener("click", () => {
  getImage();
});

async function getImage() {
  const queryTerm = searchInput.value;
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${queryTerm}`, { mode: 'cors' });
  if (!response.ok) {
    alert("invalid API key");
    GIPHY_API_KEY = prompt("enter your GIPHY API key, then try again");
  } else {
    const imageData = await response.json();
    if (imageData.data.length <= 0) {
      alert("no matching images found");
    } else {
      img.src = imageData.data.images.original.url;
    } 
  }
}
