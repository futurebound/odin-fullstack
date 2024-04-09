"use strict"

const dropBtn = document.querySelector(".drop-btn");
dropBtn.addEventListener("click", () => {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
});

// close dropdown if clicking outside of it
window.onclick = (e) => {
  if (!e.target.matches(".drop-btn")) {
    const dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
}
