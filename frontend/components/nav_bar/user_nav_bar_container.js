import { connect } from 'react-redux'
import UserNavBar from './user_nav_bar'
import { logout } from '../../actions/session_actions'

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => {
  return {
  logout: () => dispatch(logout())
}}

export default connect(mSTP, mDTP)(UserNavBar)