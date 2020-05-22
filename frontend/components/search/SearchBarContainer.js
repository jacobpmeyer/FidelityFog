import { searchForTracks } from "../../actions/search_actions";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";

const mSTP = (state) => ({});

const mDTP = (dispatch) => ({
  searchForTracks: (request) => dispatch(searchForTracks(request)),
});

export default connect(mSTP, mDTP)(SearchBar);
