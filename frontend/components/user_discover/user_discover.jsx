import React from 'react'
import UserNavBarContainer from '../nav_bar/user_nav_bar_container'

class UserDiscover extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="user">
        <UserNavBarContainer />
        Hello from the logged in screen
      </div>
    )
  }
}

export default UserDiscover