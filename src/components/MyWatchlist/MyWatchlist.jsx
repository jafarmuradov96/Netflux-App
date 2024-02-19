import { Link } from "react-router-dom"

const MyWatchlist = () => {
  return (
    <Link to="watchlist" className="header__right__watchlist">
    <span>Watchlist</span>
    <span className="header__right__watchlist__count">0</span>
  </Link>
  )
}

export default MyWatchlist