import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { Books } from "./Data/booktypes";

import MainCopy from "./Containers/MainCopy/MainCopy";

function App() {
  const [allBooks, setAllBooks] = useState<Books[]>([])
  const [showAllBooks, setShowAllBooks] = useState<boolean>(false);
  const [showMyBooks, setShowMyBooks] = useState<boolean>(true);

  const getBooks = async () => {
    const response = await fetch("http://localhost:8080/allbooks");
    const booksData = await response.json()
    setAllBooks(booksData)
  }

  useEffect(() => {
    getBooks()
  },[])



  return (
    <>
      <div>
        <NavBar
          setShowAllBooks={setShowAllBooks}
          setShowMyBooks={setShowMyBooks}
        />
        <MainCopy showAllBooks={showAllBooks} allBooks={allBooks} />
      </div>
    </>
  );
}

export default App;
