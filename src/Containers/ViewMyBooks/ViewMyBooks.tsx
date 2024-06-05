import "./ViewMyBooks.scss";
import { CurrentlyReading } from "../../Data/booktypes";
import CurrentlyReadingCard from "../../Components/CurrentlyReadingCards/CurrentlyReadingCard";
import { Link } from "react-router-dom";

type ViewMyBooksProps = {
  currentlyReading: CurrentlyReading[];
};

const ViewMyBooks = ({ currentlyReading }: ViewMyBooksProps) => {

    return (
    <div>
        <h2 className="currentlyreading-title">Currently Reading</h2>
        {currentlyReading.map((book) => (
        <CurrentlyReadingCard key={book.id}
        title={book.title}
        author={book.author}
        imageURL={book.imageURL}
        numberOfPages={book.numberOfPages} />
        ))}

        <div>
            <Link to="/bookStats"> <p>My All Time Reading Book Stats</p> </Link>
        </div>
        <div>
            <Link to="/wanttoread"> <p>Want to Read</p> </Link>
        </div>

        <div>
            <Link to="/read"> <p>Finished reading</p> </Link>
        </div>
    </div>
    );
};

export default ViewMyBooks;
