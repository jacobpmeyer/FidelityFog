import { connect } from 'react-redux'
import Upload from './upload'

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
  createTrack: track => dispatch(createTrack(track))
})

export default connect(mSTP, mDTP)(Upload)