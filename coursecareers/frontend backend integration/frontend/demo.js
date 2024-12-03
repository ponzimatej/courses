// in node: npm init
// npm install node-fetch
// add "type": "module" to package.json

import fetch from "node-fetch";

async function getData() {
  const results = await fetch("http://localhost:8080/books")
    .then((data) => data.json())
    .then((data) => data);
  for (const result of results) {
    console.log(result);
  }
}

async function createBook(id, author, title, quantity) {
  const data = {
    id,
    author,
    title,
    quantity,
  };
  const result = await fetch("http://localhost:8080/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(result);
}

createBook("4", "Matej", "Matejova kniha", 2).then(() => getData());
