import { connect } from 'react-redux'
import UserDiscover from './user_discover'
import { fetchAllTracks } from '../../actions/track_actions'

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    tracks: Object.values(state.entities.tracks)
  }
}

const mDTP = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
})

export default connect(mSTP, mDTP)(UserDiscover)