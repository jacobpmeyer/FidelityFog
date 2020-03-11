import { connect } from 'react-redux'
import Index from './index'
import DiscoverTracks from './discover_tracks'
import { updateCurrentTrack } from '../../actions/track_ui_actions'

const mSTP = state => ({
  tracks: Object.values(state.entities.tracks)
})

const mDTP = dispatch => ({
  updateCurrentTrack: track => dispatch(updateCurrentTrack(track)),
  
})

export default connect(mSTP, mDTP)(DiscoverTracks)