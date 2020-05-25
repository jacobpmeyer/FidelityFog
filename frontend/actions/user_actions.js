import * as userApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

const recieveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUser = () => (dispatch) =>
  userApiUtil.fetchUser().then((user) => dispatch(recieveUser(user)));
