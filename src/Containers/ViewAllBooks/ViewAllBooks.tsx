// import books from "../../Data/storedBooks";
import BookCard from "../../Components/BookCard/BookCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Books } from "../../Data/booktypes";
import { useState, FormEventHandler, useEffect } from "react";

type ViewAllBooksProps = {
  allBooks: Books[];
  handleSearchTerm: FormEventHandler<HTMLInputElement>;
  searchTerm: string;
};

const ViewAllBooks = ({
  allBooks,
  handleSearchTerm,
  searchTerm,
}: ViewAllBooksProps) => {
  return (
    <div>
      <SearchBar handleSearchTerm={handleSearchTerm} searchTerm={searchTerm} />
      {allBooks
        .filter((books) => books.title.toLowerCase().includes(searchTerm))
        .map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            imageURL={book.imageURL}
          />
        ))}
    </div>
  );
};

export default ViewAllBooks;
