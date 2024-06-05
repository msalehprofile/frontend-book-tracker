import { Dispatch, SetStateAction } from 'react';
import './NavBar.scss';

type NavBarProps = {
  setShowAllBooks: Dispatch<SetStateAction<boolean>>;
  setShowMyBooks: Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({setShowAllBooks, setShowMyBooks}: NavBarProps) => {

  const setHandleBrowseClick = () => {
    setShowAllBooks(true)
    setShowMyBooks(false)
  }

  const setHandleMyBooksClick = () => {
    setShowAllBooks(false)
    setShowMyBooks(true)
  }

  return (
    <>
    <div className="navigation">
        <h1 className="navigation__title">fab<span className="navigation__bold">reads</span></h1>
        <nav className="navigation__navbar">
          <p onClick={setHandleMyBooksClick}>My books</p>
          <p onClick={setHandleBrowseClick}>Browse</p>
        </nav>
    </div>
</>
  )
}

export default NavBar