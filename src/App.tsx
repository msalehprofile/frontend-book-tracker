import { Books } from "./Data/booktypes";
import "./App.scss";
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from "react";
import BookCard from "./BookCard/BookCard";
import books from "./Data/storedBooks";

function App() {

  // const getBooks = async () => {
  //   const url = "http://localhost:8080/allbooks";
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     console.log(`Unsuccessful fetch, error code was: ${response.status}`);
  //     return;
  //   }

  //   const data: Books[] = await response.json();

  //   setBooks(data);
  // };

  // useEffect(() => {
  //   getBooks();
  // }, []);


  return (
    <>
      <div>
        <NavBar />
        {books.map((book) => (
          <BookCard key={book.id}
            books={books}
            title={book.title}
            author={book.author}
            genre={book.genre}
          />
        ))}
      </div>
    </>
  );
}

export default App;
