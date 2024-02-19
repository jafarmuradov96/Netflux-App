import HeadingSection from "../../components/heading/HeadingSection";
import "./YourRatings.scss";
import YourRatingsItem from "./yourRatingsItem/YourRatingsItem";

const YourRatings = () => {
  return (
    <div className="container">
      <div className="your-ratings">
      <HeadingSection>Your Ratings</HeadingSection>

        <div className="your-ratings__list">
            <YourRatingsItem />
            <YourRatingsItem />
            <YourRatingsItem />
            <YourRatingsItem />
        </div>
      </div>
    </div>
  );
};

export default YourRatings;
