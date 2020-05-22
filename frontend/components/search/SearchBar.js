import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ searchForTracks }) => {
  const [searchString, setSearchString] = useState("");
  const history = useHistory();

  const submitSearch = (e) => {
    e.preventDefault();
    setSearchString("");
    searchForTracks(searchString).then(history.push("/search"));
  };

  return (
    <div className="search-bar">
      <form className="search-bar-form" onSubmit={submitSearch}>
        <input
          placeholder="Search by Artist name or Track name"
          type="search"
          name="search"
          value={searchString}
          onChange={(e) => setSearchString(e.currentTarget.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
