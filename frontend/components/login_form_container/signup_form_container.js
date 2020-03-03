import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions'

const mSTP = state => ({
  formType: 'Create account'
})

const mDTP = dispatch => ({
  formAction: (user) => dispatch(signup(user))
})

const SignupFormContainer = connect(mSTP, mDTP)(SessionForm)

export default SignupFormContainer