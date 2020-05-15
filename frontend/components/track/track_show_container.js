import { connect } from "react-redux";
import TrackShow from "./track_show";
import { fetchTrack, deleteTrack } from "../../actions/track_actions";
import {
  updateCurrentTrack,
  pauseTrack,
  playTrack,
} from "../../actions/track_ui_actions";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    track: state.entities.tracks[ownProps.match.params.trackId],
    currentTrack: state.ui.currentTrack,
    playing: state.ui.playing,
  };
};

const mDTP = (dispatch) => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  updateCurrentTrack: (track) => dispatch(updateCurrentTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
});

export default connect(mSTP, mDTP)(TrackShow);
