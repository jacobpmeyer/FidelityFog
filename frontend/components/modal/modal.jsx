import React from 'react'
import { connect } from 'react-redux'
import LoginFormContainer from '../login_form/login_form_container'
import SignupFormContainer from '../login_form/signup_form_container'
import { closeModal } from '../../actions/modal_actions'

const Modal = ({modal, closeModal}) => { 
  if (!modal) {
    return null
  }
  let component = null;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />
      break
    case "signup":
      component = <SignupFormContainer />
      break
    default:
      return null
  }

  return (
    <div onClick={closeModal} className="modal-background"> 
      <div onClick={e => e.stopPropagation()} className="modal-child">
        { component }
      </div>
    </div>
  )
}

const mSTP = state => ({
  modal: state.ui.modal
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal)