import { connect } from 'react-redux'
import { updateTrack, fetchTrack } from '../../actions/track_actions'
import Edit from './edit'

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  track: state.entities.tracks[ownProps.match.params.trackId]
})

const mDTP = dispatch => ({
  updateTrack: (track) => dispatch(updateTrack(track)),
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
})

export default connect(mSTP, mDTP)(Edit)