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

function App() {
  const [allBooks, setAllBooks] = useState<Books[]>([]);
  const [wantToRead, setWantToRead] = useState<WantToReadBooks[]>([]);
  const [currentlyReading, setCurrentlyReading] = useState<CurrentlyReading[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [readBooks, setReadBooks] = useState<ReadBooks[]>([]);

  const getBooks = async () => {
    const response = await fetch("http://localhost:8080/allbooks");
    const booksData = await response.json();
    setAllBooks(booksData);
  };

  const getCurrentlyReading = async () => {
    const response = await fetch("http://localhost:8080/currentlyreading");
    const currentlyReadingData = await response.json();
    setCurrentlyReading(currentlyReadingData);
  };

  const getWantToRead = async () => {
    const response = await fetch("http://localhost:8080/wanttoread");
    const wantToReadData = await response.json();
    setWantToRead(wantToReadData);
  };

  const getReadBooks = async () => {
    const response = await fetch("http://localhost:8080/read");
    const booksReadData = await response.json();
    setReadBooks(booksReadData);
  };

  const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanedInput);
  };

 

  useEffect(() => {
    getBooks();
    getCurrentlyReading();
    getWantToRead();
    getReadBooks();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/myBooks"
          element={<ViewMyBooks currentlyReading={currentlyReading} />}
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
          element={<WantToRead wantToRead={wantToRead} />}
        />
        <Route
          path="/finishedreading"
          element={<FinishedReading readBooks={readBooks} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
