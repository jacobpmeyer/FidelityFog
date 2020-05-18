import {
  RECEIVE_TRACK_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../actions/comment_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TRACK_COMMENTS:
      return Object.assign({}, nextState, action.comments);
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
    case REMOVE_COMMENT:
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
};
