import './WantToReadBookCard.scss'
import Button from '../Button/Button';

type WantToReadBookCardProps = {
    title: string;
    author: string;
    imageURL: string | undefined;
    dateAdded: string;
}

const WantToReadBookCard = ({ title, author, imageURL, dateAdded }: WantToReadBookCardProps) => {
    
  return (
    <div>
        <div className="wtr-BookCard">
        <img className="wtr-bookCard__image" src={imageURL} alt="" />
        <div className="wtr-bookCard__details">
        <p className="wtr-bookCard__details--book">{title}</p>
        <p className="wtr-bookCard__details--book">{author}</p>
        <p className="wtr-bookCard__details--book">{dateAdded}</p>
        <Button label="Currently Reading" />
      </div>
    </div>
    </div>
  )
}

export default WantToReadBookCard