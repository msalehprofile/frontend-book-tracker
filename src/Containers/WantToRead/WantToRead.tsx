import WantToReadBookCard from "../../Components/WantToReadBookCard/WantToReadBookCard";
import { CurrentlyReading, WantToReadBooks } from "../../Data/booktypes";
import "./WantToRead.scss";
import { useState, useEffect } from "react";

type WantToReadProps = {
  wantToRead: WantToReadBooks[];
};

const WantToRead = ({ wantToRead}: WantToReadProps) => {
  const [selectedBookId, setSelectedBookId] = useState<number>();
  const [selectedBook, setSelectedBook] = useState<WantToReadBooks | null>(null);
  const [addBookToCR, setAddBookToCR] = useState<Boolean>(false)

  const handleSelect = (bookId: number) => {
    setSelectedBookId(bookId);
    setAddBookToCR(true)
  };

  // const handleDelete = (bookId: number) => {
  //   setSelectedBookId(bookId);
    
  // };

  const getBookById = async () => {
    const response = await fetch(`http://localhost:8080/TBRbooks/${selectedBookId}`);
    const book = await response.json();
    setSelectedBook(book);
    addBookToCurrentlyReading(book)

}

const addBookToCurrentlyReading = async(book: CurrentlyReading) => {
  await fetch("http://localhost:8080/currentlyreading", {
    method: "POST",
    headers: { admin: "true", "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
}

useEffect(() => {
  if (selectedBookId !== null && selectedBookId !== undefined) {
    getBookById();
  }
}, [selectedBookId]);

console.log(selectedBook)

  return (
    <div>
      {wantToRead.map((book) => (
        <WantToReadBookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          dateAdded={book.dateAdded}
          imageURL={book.imageURL}
          handleSelect={handleSelect}

        />
      ))}
    </div>
  );
};

export default WantToRead;
