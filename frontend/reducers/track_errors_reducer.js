import { RECEIVE_TRACK_ERRORS } from '../actions/track_actions'

const TrackErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      if (action.errors === undefined) {
        return []
      } else {
        return action.errors
      }
    default: 
      return state
  }
}

export default TrackErrorsReducer