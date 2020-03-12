import {
  PLAY_TRACK,
  PAUSE_TRACK
} from '../actions/track_ui_actions'

const PlayingUiReducer = (state = null, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case PLAY_TRACK:
      nextState = Object.assign({}, nextState, { playing: true })
      return nextState
    case PAUSE_TRACK:
      nextState = Object.assign({}, nextState, { playing: false })
      return nextState
    default:
      return state
  }
}

export default PlayingUiReducer