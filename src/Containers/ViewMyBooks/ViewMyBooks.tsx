import "./ViewMyBooks.scss";
import { CurrentlyReading } from "../../Data/booktypes";
import CurrentlyReadingCard from "../../Components/CurrentlyReadingCards/CurrentlyReadingCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type ViewMyBooksProps = {
  handleSelect: (bookId: number) => void;
};

const ViewMyBooks = ({ handleSelect }: ViewMyBooksProps) => {
    const [currentlyReading, setCurrentlyReading] = useState<CurrentlyReading[]>(
        []
      );

    const getCurrentlyReading = async () => {
        const response = await fetch("http://localhost:8080/currentlyreading");
        const currentlyReadingData = await response.json();
        setCurrentlyReading(currentlyReadingData);
      };

      useEffect(() => {
        getCurrentlyReading();
      }, []);


    return (
    <div className="mybooks">
        <h2 className="mybooks__currentlyreading-title">Currently Reading</h2>
        {currentlyReading.map((book) => (
        <CurrentlyReadingCard key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        imageURL={book.imageURL}
        numberOfPages={book.numberOfPages}
        handleSelect={handleSelect} />
        ))}

        <div className="mybooks__tiles">
            <Link to="/bookStats"> <p className="mybooks__tiles--link" >My All Time Reading Book Stats</p> </Link>

            <Link to="/wanttoread"> <p className="mybooks__tiles--link">Want to Read</p> </Link>

            <Link to="/finishedbooks"> <p className="mybooks__tiles--link">Finished reading</p> </Link>
        </div>
    </div>
    );
};

export default ViewMyBooks;
