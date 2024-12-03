"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((data) => data.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2>Books from API</h2>
      {books.map((book) => (
        <div>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Amount: {book.quantity}</p>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
}
