import "./BookCard.scss";

export type BookData = {
  title: string;
  author: string;
  imageURL: string | undefined;
  id: number;
  handleSelect?: (bookId: number) => void;
};

const BookCard = ({ title, author, imageURL, id, handleSelect }: BookData) => {
  return (
    <div className="bookCard">
      <img className="bookCard__image" src={imageURL} alt="" />
      <div className="bookCard__details">
        <p className="bookCard__details--title">{title}</p>
        <p className="bookCard__details--book">{author}</p>
        <button className="bookCard__details--button" onClick={handleSelect ? () => handleSelect(id) : undefined} >Want to Read </button>
      </div>
    </div>
  );
};

export default BookCard;
