import { connect } from 'react-redux'
import UserDiscover from './user_discover'
import { logout } from '../../actions/session_actions'

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
  
})

export default connect(mSTP, mDTP)(UserDiscover)