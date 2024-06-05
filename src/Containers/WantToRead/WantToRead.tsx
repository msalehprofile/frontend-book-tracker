import WantToReadBookCard from '../../Components/WantToReadBookCard/WantToReadBookCard';
import { WantToReadBooks } from '../../Data/booktypes';
import './WantToRead.scss';

type WantToReadProps = {
    wantToRead: WantToReadBooks[];
}

const WantToRead = ({wantToRead}: WantToReadProps) => {
  return (
    <div>
        {wantToRead.map((book) => <WantToReadBookCard title={book.title} author={book.author} dateAdded={book.dateAdded} imageURL={book.imageURL}/>)}
    </div>
  )
}

export default WantToRead