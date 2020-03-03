import { login } from '../../actions/session_actions'
import DemoForm from './demo_form'
import { connect } from 'react-redux'

const mSTP = state => ({
  user: {
    username: 'demo',
    password: 'hunter12'
  }
})

const mDTP = dispatch => ({
  login: (user) => dispatch(login(user))
})

const DemoFormContainer = connect(mSTP, mDTP)(DemoForm)

export default DemoFormContainer