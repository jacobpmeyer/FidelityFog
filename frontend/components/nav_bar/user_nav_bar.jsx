import React from 'react'
import NavBarLoggedIn from './nav_bar_logged_in'
import NavBarLoggedOut from './nav_bar_logged_out'
import { Link } from 'react-router-dom'

class UserNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    return (
      <div className="user-nav">
        <div className="user-nav-items">
          <Link className="nav-logo-box" to="/discover">
            <div className="nav-logo">
              <img src={window.logoUserNav} alt="Logo" />
            </div>
          </Link>
          <ul className="nav-left">
            <Link to="/discover">
              <li>
                Home
              </li>
            </Link>
            <li>
              Stream
            </li>
            <li>
              Library
            </li>
          </ul>
          <div className="nav-center">
            <input type="search" name="search" id=""/>
          </div>
          <div className="nav-right">
            <ul className="nav-right-buttons">
              <li>
                <Link className="upload-link" to="/upload">Upload</Link>
              </li>
              <li>
                {this.props.currentUser.username}
              </li>
              <li onClick={() => this.props.logout()} className="nav-logout">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default UserNavBar