import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLoggedIn = (props) => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={window.logoImg} alt="Logo" />;
      </div>
      <div className="title"><Link to="/">FidelityFog</Link></div>
      <ul>
        <li className="username">Hello, {props.currentUser.username}!</li>
        <li>
          <button onClick={props.handleLogout} className="log-out">
            Log Out!
          </button>
        </li>
      </ul>
    </div>
  )
}

export default NavBarLoggedIn