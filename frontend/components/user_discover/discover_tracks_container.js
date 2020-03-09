import { connect } from 'react-redux'
import Index from './index'
import DiscoverTracks from './discover_tracks'

const mSTP = state => ({
  tracks: Object.values(state.entities.tracks)
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(DiscoverTracks)