import WatchlistBtn from "../../../components/watchlistBtn/WatchlistBtn";
import Rate from "../../../components/rate/Rate";
import { FaStar } from "react-icons/fa";

const YourRatingsItem = () => {
  return (
    <div className="your-ratings__cart">
      <div className="your-ratings__cart__content">
        <h3>Django Unchained</h3>
        <p>
          With the help of a German bounty-hunter, a freed slave sets out to
          rescue his wife from a brutal plantation owner in Mississippi.
        </p>

        <div className="movie-cart__stars">
          <span className="movie-cart__stars__rating">
            <FaStar />
            <span>8.5</span>
          </span>{" "}
          |
          <span className="movie-cart__stars__rate">
            <Rate />
          </span>
        </div>

        <div className="your-ratings__cart__content__time">
          <span>165 min</span> | <span>2012</span>
        </div>

        <div className="your-ratings__cart__content__genre">
          <span>drama, western</span>
        </div>

        <div className="your-ratings__cart__content__actors">
          <span>
            <b style={{ paddingRight: "6px" }}>Director:</b> Quentin Tarantino
          </span>
          <span>
            <b style={{ paddingRight: "6px" }}>Writer:</b> Quentin Tarantino
          </span>
          <span>
            <b style={{ paddingRight: "6px" }}>Actors:</b> Jamie Foxx, Christoph
            Waltz, Leonardo DiCaprio
          </span>
        </div>

        <div className="movie-cart__button movie-detail__content__btn">
          <WatchlistBtn />
        </div>
      </div>

      <div className="your-ratings__cart__image">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default YourRatingsItem;
