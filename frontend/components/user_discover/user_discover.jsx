import React from 'react'
import UserNavBarContainer from '../nav_bar/user_nav_bar_container'
import IndexContainer from './index_container'

class UserDiscover extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.props.fetchAllTracks()
  }

  render() {
    const {tracks} = this.props
    if (this.props.tracks === null) {
      return null
    } else {
      return (
        <div className="user">
          <UserNavBarContainer />
          <IndexContainer />
          
        </div>
      )
    }
  }
}

export default UserDiscover