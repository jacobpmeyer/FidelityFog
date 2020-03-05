import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup, login } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions'

const mSTP = ({ errors }) => ({
  formType: 'Create account',
  errors: errors.session
})

const mDTP = dispatch => ({
  formAction: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  login: (user) => dispatch(login(user))
})

const SignupFormContainer = connect(mSTP, mDTP)(SessionForm)

export default SignupFormContainer