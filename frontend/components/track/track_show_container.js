import { connect } from 'react-redux'
import TrackShow from './track_show'
import { fetchTrack } from '../../actions/track_actions'

const mSTP = (state, ownProps) => {
  return {
    track: state.tracks ? state.tracks[ownProps.match.params.trackId] : null
  }
}

const mDTP = dispatch => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
})

export default connect(mSTP, mDTP)(TrackShow)
