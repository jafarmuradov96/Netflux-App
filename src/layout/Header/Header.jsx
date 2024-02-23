import "./Header.scss";
import logo from "../../assets/image/logo1.png";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import MyWatchlist from "../../components/MyWatchlist/MyWatchlist";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/movieSlice/movieSlice";

const Header = ({ handleClickHamburger, handleClickSearch }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.movies.searchValue);



  const styleIcon = {
    color: "black",
    fontSize: "1em",
    marginRight: "0.8rem",
    cursor: "pointer",
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="header__nav">
            <Navbar />
          </div>

          <div className="header__right">
            <form className="header__right__search">
              <Input
                placeholder="Search"
                type="text"
                value={searchValue}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
              />
              <Link to="movies" >
                <Button type="submit" onClick={handleClickSearch}>
                  <FaSearch style={styleIcon} />
                </Button>
              </Link>
            </form>

            <MyWatchlist />

            <button
              className="hamburger"
              onClick={() => handleClickHamburger()}
            >
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
