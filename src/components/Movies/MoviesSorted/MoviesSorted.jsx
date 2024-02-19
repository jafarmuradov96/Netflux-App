

const MoviesSorted = ({ handleSortChange }) => {
  return (
    <div>
      <select name="sortedYear" id="sortedYear" onChange={handleSortChange}>
        <option value="">Sorted</option>
        <option value="sortedYear">Years</option>
        <option value="sortedRating">Rating</option>
      </select>
    </div>
  );
};
export default MoviesSorted
