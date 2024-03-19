"use strict"

const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const matching = document.querySelector("#matching")

const checkMatchingPassword = () => {
  console.log(`${password.value} ${confirmPassword.value}`)
  if (password.value !== confirmPassword.value) {
    matching.textContent = "Passwords do not match"
  } else {
    matching.textContent = ""
  }
}

password.addEventListener("keyup", () => checkMatchingPassword())
confirmPassword.addEventListener("keyup", () => checkMatchingPassword())


