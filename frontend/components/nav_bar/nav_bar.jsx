import React from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'

class NavBar extends React.Component{
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="NavBar">
          <ul>
            <li>{this.props.currentUser.username}</li>
            <li>
              <button onClick={this.handleLogout}>
                Log Out!
              </button>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="NavBar">
          <ul>
            <li>
              <Link to='/signup'>Create account</Link>
            </li>
            <li>
              <Link to='/login'>Sign In</Link>
            </li>
            <li>
              <Link to='/demo'>Demo</Link>
            </li>
          </ul>
        </div>
      )
    }
  }

}

export default NavBar