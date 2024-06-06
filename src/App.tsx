import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState, FormEvent } from "react";
import {
  Books,
  CurrentlyReading,
  WantToReadBooks,
  ReadBooks,
} from "./Data/booktypes";
import ViewAllBooks from "./Containers/ViewAllBooks/ViewAllBooks";
import ViewMyBooks from "./Containers/ViewMyBooks/ViewMyBooks";
import AddABook from "./Containers/AddABook/AddABook";
import WantToRead from "./Containers/WantToRead/WantToRead";
import FinishedReading from "./Containers/FinishedReading/FinishedReading";
import ReviewBooksPage from "./Containers/ReviewBooksPage/ReviewBooksPage";

function App() {
  const [allBooks, setAllBooks] = useState<Books[]>([]);

  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [readBooks, setReadBooks] = useState<ReadBooks[]>([]);
  const [wantToReadCount, setWantToReadCount] = useState<Number>();
  const [pagesRead, setPagesRead] = useState<Number>();
  const [numberOfBooksRead, setNumberOfBooksRead] = useState<Number>();
  const [selectedBookId, setSelectedBookId] = useState<number>();

  const getBooks = async () => {
    const response = await fetch("http://localhost:8080/allbooks");
    const booksData = await response.json();
    setAllBooks(booksData);
  };

  const getReadBooks = async () => {
    const response = await fetch("http://localhost:8080/finishedreading");
    const booksReadData = await response.json();
    setReadBooks(booksReadData);
  };

  const getAmountOfBooksRead = async () => {
    const response = await fetch("http://localhost:8080/countreadbooks");
    const booksReadData = await response.json();
    setNumberOfBooksRead(booksReadData);
  };

  const handleSelect = (bookId: number) => {
    setSelectedBookId(bookId);
  };

  // const getAmountOfPagesRead = async () => {
  //   const response = await fetch("http://localhost:8080/countreadpages");
  //   const pagesReadData = await response.json();
  //   setPagesRead(pagesReadData);
  // };

  const getAmountOfBooksInTBR = async () => {
    const response = await fetch("http://localhost:8080/countTBR");
    const booksReadData = await response.json();
    setWantToReadCount(booksReadData);
  };

  const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanedInput);
  };

    const defaultFormState = {
    id: -1,
    title: "",
    author: "",
    genre: "",
    numberOfPages: 0,
    imageURL: "",
    dateAdded:"",
    dateStarted: "",
    dateFinished: new Date(),
    rating: 0,
    review: "",
  };

  useEffect(() => {
    getBooks();
    getReadBooks();
    getAmountOfBooksRead();
    getAmountOfBooksInTBR();
  }, [wantToReadCount]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/myBooks"
          element={
            <ViewMyBooks
              numberOfBooksRead={numberOfBooksRead}
              wantToReadCount={wantToReadCount}
              pagesRead={pagesRead}
              handleSelect={handleSelect}
            />
          }
        />
        <Route
          path="/browseBooks"
          element={
            <ViewAllBooks
              allBooks={allBooks}
              searchTerm={searchTerm}
              handleSearchTerm={handleSearchInput}
            />
          }
        />
        <Route path="/addBooks" element={<AddABook />} />
        <Route
          path="/wanttoread"
          element={<WantToRead />}
        />
        <Route
          path="/finishedbooks"
          element={<FinishedReading readBooks={readBooks} />}
        />
        <Route
          path="/myBooks/reviewbook"
          element={<ReviewBooksPage defaultFormState={defaultFormState} selectedBookId={selectedBookId}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
