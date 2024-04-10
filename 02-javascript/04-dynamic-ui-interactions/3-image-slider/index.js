"use strict";

let isInitial = true;
let activeIndex = 0;

const slides = document.querySelectorAll(".slide");
console.log(slides);

const dots = document.querySelectorAll(".dot");
dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    setActiveSlide(dotIndex);
  });
});

const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", () => {
  const prevIndex = activeIndex - 1;
  setActiveSlide(prevIndex);
});

const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
  const nextIndex = activeIndex + 1;
  setActiveSlide(nextIndex);
});

const setActiveSlide = (slideIndex) => {
  slideIndex = validateIndex(slideIndex);

  // toggle off previous active status
  dots[activeIndex].classList.toggle("selected");
  slides[activeIndex].classList.toggle("active");

  // toggle on target active status
  dots[slideIndex].classList.toggle("selected");
  slides[slideIndex].classList.toggle("active");
  activeIndex = slideIndex;
}

const validateIndex = (slideIndex) => {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  return slideIndex
}


const showSlidesAutoAdvance = () => {
  if (isInitial) {
    isInitial = false;
    dots[activeIndex].classList.toggle("selected");
    slides[activeIndex].classList.toggle("active");
  } else {
    nextButton.click();
  }
  setTimeout(showSlidesAutoAdvance, 5000);
}


// initial state
showSlidesAutoAdvance();