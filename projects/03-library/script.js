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
}

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

function removeBookByIndex(index) {
  myLibrary.splice(index, 1)
  // console.log(`removed ${title} from library`)
  console.log(myLibrary)
}

function createNewBook() {

}

function displayAllBooks() {
  const container = document.querySelector(".container");
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

    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "deleteBtn")
    deleteBtn.addEventListener("click", (e) => {
      // console.log(e.target.parentNode)
      const parentBook = e.target.parentNode
      // console.log(parentBook.id)
      removeBookByIndex(parseInt(parentBook.id))
      container.removeChild(parentBook)
      container.replaceChildren()
      displayAllBooks()
    })
    deleteBtn.textContent = "DELETE"
    card.appendChild(deleteBtn)


    container.appendChild(card);
  }
}

const newBookBtn = document.querySelector(".new-book")
newBookBtn.addEventListener("click", () => {
  // populate form
  
})

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const redRising = new Book("Red Rising", "Pierce Brown", 382, false);
addBookToLibrary(theHobbit);
addBookToLibrary(redRising);

displayAllBooks();