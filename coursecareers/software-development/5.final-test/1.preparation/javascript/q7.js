class Book {
  title;
  author;
  borrower;

  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.borrower = null;
  }
}

class Library {
  books;

  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    let book = new Book(title, author);
    this.books.push(book);
  }

  checkoutBook(title, borrower) {
    for (const book of this.books) {
      if (book.title === title && book.borrower === null) {
        book.borrower = borrower;
        console.log(`${borrower} borrowed ${book.title}`);
        return;
      }
    }
  }

  returnBook(title) {
    for (const book of this.books) {
      if (book.title === title && book.borrower !== null) {
        book.borrower = null;
        console.log(`${book.title} has been returned`);
        return;
      }
    }
  }

  listBorrowedBooks() {
    let borrowedBooks = [];
    for (const book of this.books) {
      if (book.borrower !== null) {
        borrowedBooks.push(book);
      }
    }
    return borrowedBooks;
  }
}

let library = new Library();
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("Moby Dick", "Herman Melville");
library.addBook("1984", "George Orwell");
library.checkoutBook("The Great Gatsby", "John Doe");
library.checkoutBook("1984", "Jane Doe");
console.log(library.listBorrowedBooks());
// Outputs: [{title: "The Great Gatsby", author: "F. Scott Fitzgerald", borrower: "John Doe"},
// {title: "1984", author: "George Orwell", borrower: "Jane Doe"}]
library.returnBook("The Great Gatsby");
console.log(library.listBorrowedBooks());
// Outputs: [{title: "1984", author: "George Orwell", borrower: "Jane Doe"}]
