import { connect } from "react-redux";
import Splash from "./splash";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => ({});

const mDTP = (dispatch) => ({
  openModal: (field) => dispatch(openModal(field)),
});

const SplashContainer = connect(mSTP, mDTP)(Splash);

export default SplashContainer;
