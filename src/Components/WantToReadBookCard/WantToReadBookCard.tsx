import './WantToReadBookCard.scss'
import Button from '../Button/Button';

type WantToReadBookCardProps = {
    id: number;
    title: string;
    author: string;
    imageURL: string | undefined;
    dateAdded: string;
    handleSelect?: (bookId: number) => void;
    handleDelete?: (bookId: number) => void;
}

const WantToReadBookCard = ({ title, author, imageURL, id, dateAdded, handleSelect }: WantToReadBookCardProps) => {
    
  return (
    <div>

        <div className="wtr-bookCard">
        <img className="wtr-bookCard__image" src={imageURL} alt="" />
        <div className="wtr-bookCard__details">
        <p className="wtr-bookCard__details--title">{title}</p>
        <p className="wtr-bookCard__details--book">{author}</p>
        <p className="wtr-bookCard__details--book">{dateAdded}</p>
        <button className="wtr-bookCard__details--button" onClick={handleSelect ? () => handleSelect(id) : undefined}>Add to Currently Reading </button>
        {/* <button onClick={handleDelete ? () => handleDelete(id) : undefined}>Remove from TBR </button> */}
      </div>
    </div>
    </div>
  )
}

export default WantToReadBookCard