import { connect } from "react-redux";
import UserShow from "./UserShow";
import { fetchUser } from "../../actions/user_actions";

const mSTP = ({ entities }, ownProps) => ({
  user: entities.users[ownProps.match.params.userId],
});

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(UserShow);
