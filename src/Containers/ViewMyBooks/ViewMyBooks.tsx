import "./ViewMyBooks.scss";
import { CurrentlyReading } from "../../Data/booktypes";
import CurrentlyReadingCard from "../../Components/CurrentlyReadingCards/CurrentlyReadingCard";
import { Link } from "react-router-dom";

type ViewMyBooksProps = {
  currentlyReading: CurrentlyReading[];
  numberOfBooksRead: Number | undefined;
  wantToReadCount: Number | undefined;
  pagesRead: Number | undefined;
};

const ViewMyBooks = ({ currentlyReading, numberOfBooksRead, wantToReadCount, pagesRead }: ViewMyBooksProps) => {

    return (
    <div className="mybooks">
        <h2 className="mybooks__currentlyreading-title">Currently Reading</h2>
        {currentlyReading.map((book) => (
        <CurrentlyReadingCard key={book.id}
        title={book.title}
        author={book.author}
        imageURL={book.imageURL}
        numberOfPages={book.numberOfPages} />
        ))}

        <div className="mybooks__tiles">
            <Link to="/bookStats"> <p className="mybooks__tiles--link" >My All Time Reading Book Stats</p> </Link>

            <Link to="/wanttoread"> <p className="mybooks__tiles--link">Want to Read: {`${wantToReadCount}`} books</p> </Link>

            <Link to="/finishedbooks"> <p className="mybooks__tiles--link">Finished reading: {`${numberOfBooksRead}`} books</p> </Link>
        </div>
    </div>
    );
};

export default ViewMyBooks;
