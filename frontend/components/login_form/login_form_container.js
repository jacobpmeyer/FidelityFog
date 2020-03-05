import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions'

const mSTP = ({ errors }) => ({
  formType: 'Sign In',
  errors: errors.session
})

const mDTP = dispatch => ({
  formAction: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  login: (user) => dispatch(login(user))
})

const LoginFormContainer = connect(mSTP, mDTP)(SessionForm)

export default LoginFormContainer