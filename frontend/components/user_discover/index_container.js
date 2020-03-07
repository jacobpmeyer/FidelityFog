import { connect } from 'react-redux'
import Index from './index'

const mSTP = state => ({
  tracks: Object.values(state.entities.tracks)
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Index)