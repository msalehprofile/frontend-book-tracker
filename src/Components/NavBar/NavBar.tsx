import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <h1 className="navigation__title">
          fab<span className="navigation__bold">reads</span>
        </h1>
        <nav className="navigation__navbar">
          <Link to="/">
            <p className="navigation__navbar--link">My books</p>
          </Link>
          <Link to="/browseBooks">
            <p className="navigation__navbar--link">Browse</p>
          </Link>
          <Link to="/addBooks">
            <p className="navigation__navbar--link">Add a Book</p>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
