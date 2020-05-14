import { connect } from "react-redux";
import Trending from "./Trending";
import { fetchAllTracks, fetchTrack } from "../../actions/track_actions";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    tracks: Object.values(state.entities.tracks),
  };
};

const mDTP = (dispatch) => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  fetchTrack: (id) => dispatch(fetchTrack(id)),
});

export default connect(mSTP, mDTP)(Trending);
