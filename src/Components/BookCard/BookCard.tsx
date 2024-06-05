import "./BookCard.scss";

import Button from "../Button/Button";

export type BookData = {
  title: string;
  author: string;
  imageURL: string | undefined;
};

const BookCard = ({ title, author, imageURL }: BookData) => {
  return (
    <div className="bookCard">
      <img className="bookCard__image" src={imageURL} alt="" />
      <div className="bookCard__details">
        <p className="bookCard__details--book">{title}</p>
        <p className="bookCard__details--book">{author}</p>
        <Button label="Want to Read" />
      </div>
    </div>
  );
};

export default BookCard;
