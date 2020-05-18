import Comments from "./Comments";
import { connect } from "react-redux";
import {
  fetchTrackComments,
  createComment,
} from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
  return {
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => ({
  fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
  createComment: (track) => dispatch(createComment(track)),
});

export default connect(mSTP, mDTP)(Comments);
