import { connect } from "react-redux";
import SearchResults from "./SearchResults";

const mSTP = (state) => ({
  searchResults: Object.values(state.entities.searchResults),
});

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(SearchResults);
