import * as commentApiUtil from "../util/comment_api_util";

export const RECEIVE_TRACK_COMMENTS = "RECEIVE_TRACK_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_TRACK_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

const recieveTrackComments = (comments) => ({
  type: RECEIVE_TRACK_COMMENTS,
  comments,
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});

export const fetchTrackComments = (trackId) => (dispatch) =>
  commentApiUtil
    .fetchTrackComments(trackId)
    .then((comments) => dispatch(recieveTrackComments(comments)));

export const fetchComment = (comment) => (dispatch) =>
  commentApiUtil.fetchComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => dispatch(receiveCommentErrors(err.responseJSON))
  );

export const createComment = (comment) => (dispatch) =>
  commentApiUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => dispatch(receiveCommentErrors(err.responseJSON))
  );

export const updateComment = (comment) => (dispatch) =>
  commentApiUtil.updateComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => dispatch(receiveCommentErrors(err.responseJSON))
  );

export const deleteComment = (commentId) => (dispatch) =>
  commentApiUtil
    .deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)));
