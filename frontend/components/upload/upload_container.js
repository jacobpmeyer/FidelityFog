import { connect } from 'react-redux'
import Upload from './upload'
import { createTrack } from '../../actions/track_actions'

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.track
})

const mDTP = dispatch => ({
  createTrack: track => dispatch(createTrack(track))
})

export default connect(mSTP, mDTP)(Upload)