"use strict";

// require("dotenv").config();
// const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

let GIPHY_API_KEY = prompt("enter your GIPHY API key");

const img = document.querySelector('img');
const imgButton = document.getElementById("img-button");
const searchInput = document.getElementById("search");

imgButton.addEventListener("click", () => {
  const queryTerm = searchInput.value;
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${queryTerm}`, { mode: 'cors' })
    .then((response) => {
      if (!response.ok) {
        alert("invalid API key");
        GIPHY_API_KEY = prompt("enter your GIPHY API key");
      }
      // console.log(response.json());
      return response.json();
    })
    // .catch((error) => {
    //   console.error(error);
    // })
    .then((response) => {
      if (response.data.length <= 0) {
        alert("no matching images found");
      } else {
        img.src = response.data.images.original.url;
      } 
    });
});

