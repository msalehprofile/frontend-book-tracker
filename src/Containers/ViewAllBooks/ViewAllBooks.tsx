// import books from "../../Data/storedBooks";
import BookCard from "../../Components/BookCard/BookCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Books, WantToReadBooks } from "../../Data/booktypes";
import {
  useState,
  FormEventHandler,
  useEffect,
} from "react";

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
  const [selectedBookId, setSelectedBookId] = useState<number>();

  const handleSelect = (bookId: number) => {
    setSelectedBookId(bookId);
  };

  console.log(selectedBookId)

  const getBookById = async () => {
      const response = await fetch(`http://localhost:8080/books/${selectedBookId}`);
      const book = await response.json();
      addBookToWantToRead(book)
  }

  const addBookToWantToRead = async(book: WantToReadBooks) => {
    await fetch("http://localhost:8080/wanttoread", {
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

  return (
    <div>
      <SearchBar handleSearchTerm={handleSearchTerm} searchTerm={searchTerm} />
      {allBooks
        .filter((books) => books.title.toLowerCase().includes(searchTerm))
        .map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            imageURL={book.imageURL}
            handleSelect={handleSelect}
          />
        ))}
    </div>
  );
};

export default ViewAllBooks;
