"use strict"

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${pages} pages, ${this.read ? "has been read" : "not read yet"}`;
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info())

// obj.__proto__ and obj[[Prototype]] are both deprecated, so DON'T USE
console.log(theHobbit.__proto__);
console.log(theHobbit.__proto__ === Book.prototype);


console.log(Object.getPrototypeOf(Book.prototype));
console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);

// valueOf() inherited from Object prototype
console.log(theHobbit.valueOf())

// hasOwnProperty() can help determine what prototype something originated from
console.log(theHobbit.hasOwnProperty("valueOf"))
console.log(Object.prototype.hasOwnProperty("valueOf"))