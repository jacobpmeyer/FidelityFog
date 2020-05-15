import {
  RECEIVE_TRACK,
  REMOVE_TRACK,
  RECEIVE_ALL_TRACKS,
} from "../actions/track_actions";

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      return Object.assign({}, nextState, action.tracks);
    case RECEIVE_TRACK:
      nextState[action.track.id] = action.track;
      return nextState;
    case REMOVE_TRACK:
      delete nextState[action.trackId];
      return nextState;
    default:
      return state;
  }
};

export default TracksReducer;
