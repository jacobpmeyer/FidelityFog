import { RECEIVE_COMMENT_ERRORS } from "../actions/comment_actions";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      if (action.errors === undefined) {
        return [];
      } else {
        return action.errors;
      }
    default:
      return state;
  }
};
