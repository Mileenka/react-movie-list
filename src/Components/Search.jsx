import PropTypes from "prop-types";

import { BsSearchHeart } from "react-icons/bs";

import "./Search.css";

const Search = ({ value, setValue }) => {
  const changeInputHandler = (e) => {
    const val = e.target.value.toLowerCase();
    setValue(val);
  };

  return (
    <div className="search-container">
      <h1 className="search-title">Search your favorite movie</h1>
      <input
        className="search-movie"
        type="text"
        placeholder="Search movie"
        value={value}
        onChange={(e) => changeInputHandler(e)}
      />
      <BsSearchHeart className="BsSearchHeart" />
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default Search;
