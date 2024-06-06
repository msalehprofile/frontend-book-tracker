import "./FinishedReadingBookCard.scss";

type FinishedReadingBookCardProps = {
  title: string;
  author: string;
  imageURL: string | undefined;
  numberOfPages: number;
  rating: number;
  dateStarted: string;
  dateFinished: string;
};

const FinishedReadingBookCard = ({
  title,
  author,
  imageURL,
  rating,
  dateStarted,
  dateFinished,
}: FinishedReadingBookCardProps) => {
  console.log("ds: ", dateStarted);
  return (
    <div className="readCard">
      <img className="readCard__image" src={imageURL} alt="" />
      <div className="readCard__details">
        <p className="readCard__details--title">{title}</p>
        <p className="readCard__details--book">{author}</p>
        <p className="readCard__details--book">
          <span className="details--book--bold">Your rating:</span> {rating}/5
          Stars
        </p>
        <p className="readCard__details--book">
          <span className="details--book--bold">Started: </span>
        </p>
        <p className="readCard__details--book">
          <span className="details--book--bold">
            Finished: {dateFinished.slice(8)}/{dateFinished.slice(5, 7)}/
            {dateFinished.slice(0, 4)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FinishedReadingBookCard;
