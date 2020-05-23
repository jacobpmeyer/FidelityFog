import { connect } from "react-redux";
import TrackBar from "./track_bar";
import {
  updateCurrentTrack,
  pauseTrack,
  playTrack,
} from "../../actions/track_ui_actions";

const mSTP = ({ ui, entities }) => {
  return {
    currentTrack: ui.currentTrack,
    playing: ui.playing,
    tracks: Object.values(entities.tracks),
  };
};

const mDTP = (dispatch) => {
  return {
    updateCurrentTrack: (track) => dispatch(updateCurrentTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
  };
};

export default connect(mSTP, mDTP)(TrackBar);
