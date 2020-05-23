import React from "react";
import DiscoverTracksContainer from "../user_discover/discover_tracks_container";

const SearchResults = ({ searchResults }) => {
  if (searchResults.length) {
    return (
      <div className="user">
        <DiscoverTracksContainer tracks={searchResults} />
      </div>
    );
  } else {
    return (
      <div className="user">
        <div className="sorry">Sorry, we couldn't find anything.</div>
      </div>
    );
  }
};

export default SearchResults;
