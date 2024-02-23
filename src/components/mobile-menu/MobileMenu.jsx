import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import "./MobileMenu.scss";
import { FaSearch } from "react-icons/fa";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/movieSlice/movieSlice";

const MobileMenu = ({
  isShowMenu,
  handleCloseHamburger,
  handleClickSearch,
}) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.movies.searchValue);

  const styleIcon = {
    color: "black",
    fontSize: "1em",
    marginRight: "0.8rem",
    cursor: "pointer",
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleNavLinkClick = () => {
    scrollToTop();
    handleCloseHamburger();// Scroll to the top when a NavLink is clicked
  };
  return (
    <div className={`navigation ${isShowMenu ? "navigation-active" : ""}`}>
      <form className="navigation__form">
        <Input
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
        <Link to="movies">
          <Button type="submit" onClick={handleClickSearch}>
            <FaSearch style={styleIcon} />
          </Button>
        </Link>
      </form>

      <span
        className="navigation__close"
        onClick={() => handleNavLinkClick()}
      >
        &times;
      </span>

      <nav className="navigation__toggle-nav">
        <ul>
          <li onClick={() => handleNavLinkClick()}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handleNavLinkClick()}>
            <Link to="movies">Movies</Link>
          </li>
          <li onClick={() => handleNavLinkClick()}>
            <Link to="top-rated">Top Rated</Link>
          </li>
          <li onClick={() => handleNavLinkClick()}>
            <Link to="upcoming">Upcoming</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
