import './FinishedReading.scss';

import FinishedReadingBookCard from '../../Components/FinishedReadingBookCard/FinishedReadingBookCard'
import { ReadBooks } from '../../Data/booktypes'


type FinishedReadingProps = {
    readBooks: ReadBooks[];
}

const FinishedReading = ({readBooks}: FinishedReadingProps) => {
  return (
    <div>
    {readBooks.map((book) => <FinishedReadingBookCard key={book.id} title={book.title} author={book.author} dateFinished={book.dateFinished} dateStarted={book.dateStarted} imageURL={book.imageURL} numberOfPages={book.numberOfPages} rating={book.rating}/>)}
    </div>
  )
}

export default FinishedReading