import './FinishedReadingBookCard.scss';

type FinishedReadingBookCardProps = {
    title: string;
    author: string;
    imageURL: string | undefined;
    numberOfPages: number;
    rating: number
    dateStarted: string;
    dateFinished: string;
}

const FinishedReadingBookCard = ({}:FinishedReadingBookCardProps) => {
  return (
    <div>FinishedReadingBookCard</div>
  )
}

export default FinishedReadingBookCard