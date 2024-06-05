import books from "../../Data/storedBooks";
import BookCard from "../../Components/BookCard/BookCard";

type ViewAllBooksProps = {
  showAllBooks: boolean;
};

const ViewAllBooks = ({ showAllBooks }: ViewAllBooksProps) => {
  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          books={books}
          title={book.title}
          author={book.author}
          imageURL={book.imageURL}
        />
      ))}
    </div>
  );
};

export default ViewAllBooks;
