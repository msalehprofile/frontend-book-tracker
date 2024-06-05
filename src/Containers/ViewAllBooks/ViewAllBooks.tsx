// import books from "../../Data/storedBooks";
import BookCard from "../../Components/BookCard/BookCard";
import { Books } from "../../Data/booktypes";

type ViewAllBooksProps = {
  allBooks: Books[];
}

const ViewAllBooks = ({allBooks} : ViewAllBooksProps) => {
 
  return (
    <div>
      {allBooks.map((book) => (
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
