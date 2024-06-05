import './CurrentlyReadingCard.scss';
import Button from '../Button/Button';
import React from 'react'

type CurrentlyReadingCardProps = {
    title: string;
    author: string;
    imageURL: string | undefined;
    numberOfPages: number;
}

const CurrentlyReadingCard = ({ title, author, imageURL, numberOfPages }: CurrentlyReadingCardProps) => {
  
    return (
    <div className="currentlyReadingCard">
      <img className="currentlyReadingCard__image" src={imageURL} alt="" />
      <div className="currentlyReadingCard__details">
        <p className="currentlyReadingCard__details--book">{title}</p>
        <p className="currentlyReadingCard__details--book">{author}</p>
        <p className="currentlyReadingCard__details--book">Pages: {numberOfPages}</p>
        <Button label="Finished" />
      </div>
    </div>
  )
}

export default CurrentlyReadingCard