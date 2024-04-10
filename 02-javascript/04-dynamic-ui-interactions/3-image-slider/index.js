"use strict";

const slides = document.querySelectorAll(".slide");
console.log(slides);

const dots = document.querySelectorAll(".dot");
console.log(dots);

let slideIndex = 0;

slides[slideIndex].classList.toggle("active");

const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", () => {
  slides[slideIndex].classList.toggle("active");
  slideIndex--;
  slideIndex = slideIndex < 0 ? slides.length - 1 : slideIndex;
  slides[slideIndex].classList.toggle("active");
});

const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
  slides[slideIndex].classList.toggle("active");
  slideIndex++;
  slideIndex = slideIndex >= slides.length ? 0 : slideIndex;
  slides[slideIndex].classList.toggle("active");
});