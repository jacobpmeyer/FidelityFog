import { 
  UPDATE_CURRENT_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK
} from '../actions/track_ui_actions'

const defaultState = {
  playing: false
}

const TrackUiReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case UPDATE_CURRENT_TRACK:
      return Object.assign({}, nextState, action.track)
    case PLAY_TRACK:
      nextState = Object.assign({}, nextState, {playing: true})
      return nextState
    case PAUSE_TRACK:
      nextState = Object.assign({}, nextState, { playing: false })
      return nextState
    default:
      return state
  }
}

export default TrackUiReducer