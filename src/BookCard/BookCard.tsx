import './BookCard.scss'
import { Books } from '../Data/booktypes';

export type BookData = {
    books: Books[];
    title: string;
    author: string;
    genre: string;

}

const BookCard = ({title, author, genre}: BookData) => {
  return (
    <div>

        <p>{title}</p>
        <p>{author}</p>
        <p>{genre}</p>
    </div>
  )
}

export default BookCard