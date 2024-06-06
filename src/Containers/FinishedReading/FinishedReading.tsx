import './FinishedReading.scss';

import FinishedReadingBookCard from '../../Components/FinishedReadingBookCard/FinishedReadingBookCard'
import { ReadBooks } from '../../Data/booktypes'


type FinishedReadingProps = {
    readBooks: ReadBooks[];
}

const FinishedReading = ({readBooks}: FinishedReadingProps) => {
  return (
    <div className="finishedreading">
    <h2 className="finishedreading__title">Read Books</h2>
    {readBooks.map((book) => <FinishedReadingBookCard key={book.id} title={book.title} author={book.author} dateFinished={String(book.dateFinished)} dateStarted={book.dateStarted} imageURL={book.imageURL} numberOfPages={book.numberOfPages} rating={book.rating}/>)}
    </div>
  )
}

export default FinishedReading