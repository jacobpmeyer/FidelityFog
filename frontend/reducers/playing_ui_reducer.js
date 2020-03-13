import {
  PLAY_TRACK,
  PAUSE_TRACK
} from '../actions/track_ui_actions'

const PlayingUiReducer = (state = null, action) => {
  Object.freeze(state)
  switch (action.type) {
    case PLAY_TRACK:
      return true
    case PAUSE_TRACK:
      return false
    default:
      return state
  }
}

export default PlayingUiReducer