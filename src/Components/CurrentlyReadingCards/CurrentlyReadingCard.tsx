import './CurrentlyReadingCard.scss';

import { Link } from 'react-router-dom';

type CurrentlyReadingCardProps = {
    title: string;
    author: string;
    imageURL: string | undefined;
    numberOfPages: number;
    id: number;
    handleSelect?: (bookId: number) => void;
}

const CurrentlyReadingCard = ({ title, author, imageURL, numberOfPages, id, handleSelect }: CurrentlyReadingCardProps) => {
  
    return (
    <div className="currentlyReadingCard">
      <img className="currentlyReadingCard__image" src={imageURL} alt="" />
      <div className="currentlyReadingCard__details">
        <p className="currentlyReadingCard__details--book">{title}</p>
        <p className="currentlyReadingCard__details--book">{author}</p>
        <p className="currentlyReadingCard__details--book">Pages: {numberOfPages}</p>
        <Link to="/myBooks/reviewbook"><button onClick={handleSelect ? () => handleSelect(id) : undefined}>Finished</button></Link>
      </div>
    </div>
  )
}

export default CurrentlyReadingCard