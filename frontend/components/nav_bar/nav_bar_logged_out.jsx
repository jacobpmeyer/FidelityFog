import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLoggedOut = (props) => {
  
  return (
    <div className="nav-bar">
      <div className="logo-box">
        <div className="logo">
          <img src={window.logoImg} alt="Logo" />;
          
        </div>
        <div className="title">FidelityFog</div>
      </div>
      <ul>
        <li className="sign-in">
          <Link to='/login'>Sign in</Link>
        </li>
        <li className="sign-up">
          <Link to='/signup'>Create account</Link>
        </li>
        <li className="demo">
          <Link to='/demo'>Demo</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBarLoggedOut