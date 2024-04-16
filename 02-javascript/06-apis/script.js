"use strict";

// require("dotenv").config();
// const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

const apiKey = prompt("enter your GIPHY API key")

const img = document.querySelector('img');
fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, { mode: 'cors' })
  .then(function (response) {
    // console.log(response.json());
    return response.json();
  })
  .then(function(response) {
    // console.log(response.data.images.original.url)
    img.src = response.data.images.original.url;
  });