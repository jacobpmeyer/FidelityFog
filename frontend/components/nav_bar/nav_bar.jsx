import React from 'react'
import NavBarLoggedIn from './nav_bar_logged_in'
import NavBarLoggedOut from './nav_bar_logged_out'

class NavBar extends React.Component{
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout()
    
  }

  render() {
    const {logout, currentUser} = this.props
    if (this.props.currentUser) {
      return (
        <NavBarLoggedIn 
          currentUser={currentUser} 
          logut={logout}
          handleLogout={this.handleLogout} 
        />
      )
    } else {
      return (
        <NavBarLoggedOut openModal={this.props.openModal} />
      )
    }
  }

}

export default NavBar