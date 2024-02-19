import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import "./MobileMenu.scss";
import { FaSearch } from "react-icons/fa";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const MobileMenu = ({
  isShowMenu,
  handleCloseHamburger,
  searchValue,
  handleChangeSearchValue,
  handleClickSearch
}) => {

  const styleIcon = {
    color: "black",
    fontSize: "1em",
    marginRight: "0.8rem",
    cursor: "pointer",
  };
  return (
    <div className={`navigation ${isShowMenu ? "navigation-active" : ""}`}>
      <form className="navigation__form">
        <Input
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={handleChangeSearchValue}
        />
        <Link to="movies">
          <Button type="submit" onClick={handleClickSearch}>
            <FaSearch style={styleIcon} />
          </Button>
        </Link>
      </form>

      <span
        className="navigation__close"
        onClick={() => handleCloseHamburger()}
      >
        &times;
      </span>

      <nav className="navigation__toggle-nav">
        <ul>
          <li onClick={() => handleCloseHamburger()}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handleCloseHamburger()}>
            <Link to="movies">Movies</Link>
          </li>
          <li onClick={() => handleCloseHamburger()}>
            <Link to="top-rated">Top Rated</Link>
          </li>
          <li onClick={() => handleCloseHamburger()}>
            <Link to="upcoming">Upcoming</Link>
          </li>
          <li onClick={() => handleCloseHamburger()}>
            <Link to="your-ratings">Top Ratings</Link>
          </li>

          {/* <li>
                <a href="#"  className="dropdown-toggle">Fəaliyyətlər</a>
                <ul className="dropdown-container">
                    <li><a href="activities.html">Tədbirlərimiz</a></li>
                </ul>
            </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
