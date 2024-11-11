function mergeAndFormat(books, format) {
  if (format.toLowerCase() !== "object" && format.toLowerCase() !== "string")
    throw Error("wrong format");

  let bookSet = new Set();

  for (one of books) {
    let book = one.title + "|" + one.author;
    bookSet.add(book);
  }

  let mergedBooks = mergeBooks(books, bookSet);

  if (format.toLowerCase() === "object") console.log(mergedBooks);
  if (format.toLowerCase() === "string") stringFormat(mergedBooks);
}

function stringFormat(mergedBooks) {
  let arr = [];
  for (one of mergedBooks) {
    let newString = one.title + " by " + one.author + " (";
    let x = 0;
    while (x < one.year.length) {
      if (x === 0) {
        newString += one.year[x];
      } else {
        newString += ", " + one.year[x];
      }
      x++;
    }
    newString += ")";
    arr.push(newString);
  }
  console.log(arr);
}

function mergeBooks(books, set) {
  let mergedBooks = [];
  let obj = {};
  for (bookInSet of set) {
    let atributes = bookInSet.split("|");
    let years = [];
    for (bookInObj of books) {
      if (atributes[0] === bookInObj.title && atributes[1] === bookInObj.author)
        years.push(bookInObj.year);
    }
    obj.title = atributes[0];
    obj.author = atributes[1];
    obj.year = years;
    mergedBooks.push(obj);
    obj = {};
  }
  return mergedBooks;
}

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 2015 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];
const format = "object";
mergeAndFormat(books, format);
