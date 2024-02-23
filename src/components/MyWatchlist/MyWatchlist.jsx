import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const MyWatchlist = () => {
  const  { watchlist } = useSelector((state) => state.movies)

  const scrollToTop = () => {
    window.scrollTo(0, 0); 
  };

  const handleNavLinkClick = () => {
    scrollToTop(); 
  };
  return (
    <Link to="watchlist" className="header__right__watchlist" onClick={handleNavLinkClick}>
    <span>Watchlist</span>
    <span className="header__right__watchlist__count">{watchlist.length}</span>
  </Link>
  )
}

export default MyWatchlist