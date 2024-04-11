"use strict";

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info = () => {
    return `${this.title} by ${this.author}, ${pages} pages, ${this.read ? "has been read" : "not read yet"}`;
  }
  
  toggleRead = () => {
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

const form = document.getElementById("book-form");
const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read")

const titleError = document.querySelector("#title + span.error");
const authorError = document.querySelector("#author + span.error");
const pagesError = document.querySelector("#pages + span.error");

title.addEventListener("input", (e) => {
  if (title.validity.valid) {
    titleError.textContent = ""
    titleError.className = "error"
  } else {
    showError();
  }
})

author.addEventListener("input", (e) => {
  if (author.validity.valid) {
    authorError.textContent = ""
    authorError.className = "error"
  } else {
    showError();
  }
})

pages.addEventListener("input", (e) => {
  if (pages.validity.valid) {
    pagesError.textContent = ""
    pagesError.className = "error"
  } else {
    showError();
  }
})

const showError = () => {
  if (title.validity.valueMissing) {
    titleError.textContent = "Please enter a book title."
  } else if (title.validity.tooShort) {
    titleError.textContent = `Title should be at least ${title.minLength} chars. You've only entered ${title.value.length}`
  }

  if (author.validity.valueMissing) {
    authorError.textContent = "Please enter a book author."
  } else if (author.validity.tooShort) {
    authorError.textContent = `Author should be at least ${author.minLength} chars. You've only entered ${author.value.length}`
  }

  if (pages.validity.valueMissing) {
    pagesError.textContent = "Please enter the number of pages in the book."
  } else if (pages.validity.rangeUnderflow || pages.validity.rangeOverflow) {
    pagesError.textContent = `Pages should be between ${pages.min} and ${pages.max}.`
  }
}

const submitButton = document.querySelector(".submit-button")

submitButton.addEventListener("click", (e) => {
  console.log(title.validity.valid);
  if (!title.validity.valid || !author.validity.valid || !pages.validity.valid) {
    showError();
    e.preventDefault();
  } else {
    let book = {}
    const data = new FormData(document.querySelector("#book-form"))
    for (const [field, value] of data.entries()) {
      console.log(field, value);
      book[field] = value
    }
    const newBook = new Book(book.title, book.author, book.pages, 
        book.read === "on" ? true : false)
    addBookToLibrary(newBook)
    displayAllBooks()
  }
})

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const redRising = new Book("Red Rising", "Pierce Brown", 382, false);
addBookToLibrary(theHobbit);
addBookToLibrary(redRising);

displayAllBooks();