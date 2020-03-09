import { connect } from 'react-redux'
import TrackShow from './track_show'
import { fetchTrack, deleteTrack } from '../../actions/track_actions'

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    track: state.entities.tracks[ownProps.match.params.trackId]
  }
}

const mDTP = dispatch => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
})

export default connect(mSTP, mDTP)(TrackShow)
