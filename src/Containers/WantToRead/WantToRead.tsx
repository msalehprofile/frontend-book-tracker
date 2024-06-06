import WantToReadBookCard from "../../Components/WantToReadBookCard/WantToReadBookCard";
import { CurrentlyReading, WantToReadBooks } from "../../Data/booktypes";
import "./WantToRead.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WantToRead = () => {
  const [selectedBookId, setSelectedBookId] = useState<number>();
  const [selectedBook, setSelectedBook] = useState<WantToReadBooks | null>(null);
  const [wantToRead, setWantToRead] = useState<WantToReadBooks[]>([]);
  const navigate = useNavigate();

  const getWantToRead = async () => {
    const response = await fetch("http://localhost:8080/wanttoread");
    const wantToReadData = await response.json();
    setWantToRead(wantToReadData);
  };

  const handleSelect = (bookId: number) => {
    setSelectedBookId(bookId);

  };

  console.log(selectedBookId)

  const getBookById = async () => {
    const response = await fetch(`http://localhost:8080/TBRbooks/${selectedBookId}`);
    const book = await response.json();
    setSelectedBook(book);
    addBookToCurrentlyReading(book);
    // handleDeleteFromWantToRead();

}

const addBookToCurrentlyReading = async (book: CurrentlyReading) => {
  await fetch("http://localhost:8080/currentlyreading", {
    method: "POST",
    headers: { admin: "true", "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  handleDeleteFromWantToRead();
  navigate("/myBooks");
}

console.log(selectedBookId)

const handleDeleteFromWantToRead = async () => {
  await fetch(`http://localhost:8080/tbr/delete/${selectedBookId}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
      },
   })
  };


useEffect(() => {
  if (selectedBookId !== null && selectedBookId !== undefined) {
    getBookById();
  }
  getWantToRead()
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
