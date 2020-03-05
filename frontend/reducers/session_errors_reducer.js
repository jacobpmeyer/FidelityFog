import {
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions'

import { CLOSEMODAL } from '../actions/modal_actions'

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors === undefined) {
        return []
      } else {
        return action.errors
      }
    case CLOSEMODAL:
      return []
    default:
      return state;
  }
}

export default SessionErrorsReducer