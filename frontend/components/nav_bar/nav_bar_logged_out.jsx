import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLoggedOut = (props) => {

  return (
    <div className="nav-bar">
      <div className="logo">Logo</div>
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

export default NavBarLoggedOut