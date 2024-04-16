"use strict";

const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

const emailError = document.querySelector("#email + span.error");
const countryError = document.querySelector("#country + span.error");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirmError = document.querySelector("#password-confirm + span.error");

const submitBtn = document.getElementById("submit-btn");


email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    // emailError.className = "error"
  } else {
    showError();
  }
});

submitBtn.addEventListener("click", (e) => {
  if (!email.validity.valid || !country.validity.valid || !password.validity.valid
      || !passwordConfirm.validity.valid) {
    e.preventDefault(); // prevent form submission
    showError();  
  } else {
    alert("High five, friend!");
  }
});

const showError = () => {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an email address"
  }

  if (country.validity.valueMissing) {
    countryError.textContent = "Please enter a book author."
  } 

  if (password.validity.valueMissing) {
    passwordError.textContent = "Please enter a password"
  } 

  if (passwordConfirm.validity.valueMissing) {
    passwordConfirmError.textContent = "Please enter a matching password"
  }
}