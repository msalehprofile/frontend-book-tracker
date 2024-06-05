import { Books } from "./Data/booktypes";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import BookCard from "./Components/BookCard/BookCard";
import books from "./Data/storedBooks";
import MainCopy from "./Containers/MainCopy/MainCopy";

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
  const [showAllBooks, setShowAllBooks] = useState<boolean>(false);
  const [showMyBooks, setShowMyBooks] = useState<boolean>(true);

  return (
    <>
      <div>
        <NavBar
          setShowAllBooks={setShowAllBooks}
          setShowMyBooks={setShowMyBooks}
        />
        <MainCopy showAllBooks={showAllBooks} />
      </div>
    </>
  );
}

export default App;
