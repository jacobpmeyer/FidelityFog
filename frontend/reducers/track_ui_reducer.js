import { 
  UPDATE_CURRENT_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK
} from '../actions/track_ui_actions'



const TrackUiReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case UPDATE_CURRENT_TRACK:
      return Object.assign({}, nextState, action.track)
    default:
      return state
  }
}

export default TrackUiReducer