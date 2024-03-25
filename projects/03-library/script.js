"use strict";

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${pages} pages, ${this.read ? "has been read" : "not read yet"}`;
  }
  this.toggleRead = () => {
    this.read = !this.read;
  }
}

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

function removeBookByIndex(index) {
  myLibrary.splice(index, 1)
  console.log(myLibrary)
}

function toggleReadByIndex(index) {
  myLibrary[index].toggleRead()
}

function displayAllBooks() {
  const container = document.querySelector(".container");
  container.replaceChildren()

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `${i}`)

    const title = document.createElement("h2")
    title.textContent = book.title
    card.appendChild(title)

    const author = document.createElement("h3")
    author.textContent = book.author
    card.appendChild(author)

    const toggleReadBtn = document.createElement("button")
    toggleReadBtn.setAttribute("class", "toggle-button")
    toggleReadBtn.addEventListener("click", (e) => {
      const parentBook = e.target.parentNode
      toggleReadByIndex(parseInt(parentBook.id))
      displayAllBooks()
    })
    toggleReadBtn.textContent = "TOGGLE READ STATUS"
    card.appendChild(toggleReadBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "delete-button")
    deleteBtn.addEventListener("click", (e) => {
      const parentBook = e.target.parentNode
      removeBookByIndex(parseInt(parentBook.id))
      displayAllBooks()
    })
    deleteBtn.textContent = "DELETE"
    card.appendChild(deleteBtn)

    if (book.read) {
      card.classList.add("read")
    } else {
      card.classList.add("not-read")
    }

    container.appendChild(card);
  }
}

const modal = document.querySelector(".modal")
const openModal = document.querySelector(".open-button")
const closeModal = document.querySelector(".close-button")
const submitModal = document.querySelector(".submit-button")

openModal.addEventListener("click", () => {
  modal.showModal()
})

submitModal.addEventListener("click", (e) => {
  e.preventDefault()
  let book = {}
  const data = new FormData(document.querySelector("#modal-form"))
  for (const [field, value] of data.entries()) {
    console.log(field, value);
    book[field] = value
  }
  const newBook = new Book(book.title, book.author, book.pages, 
      book.read === "on" ? true : false)
  addBookToLibrary(newBook)
  displayAllBooks()
  modal.close()
})

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const redRising = new Book("Red Rising", "Pierce Brown", 382, false);
addBookToLibrary(theHobbit);
addBookToLibrary(redRising);

displayAllBooks();