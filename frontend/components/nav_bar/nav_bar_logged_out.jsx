import React from 'react'
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions'

const NavBarLoggedOut = ({ openModal }) => {
  
  return (
    <div className="nav-bar">
      <div className="logo-box">

        <div className="logo">
          <img src={window.logoSplash} alt="Logo" />;
        </div>
        <div className="title"><Link to="/">FidelityFog</Link></div>

      </div>

      <ul>

        <li className="sign-in">
          <button onClick={() => openModal("login")}>Sign in</button>
        </li>
        <li className="sign-up">
          <button onClick={() => openModal("signup")}>Create account</button>
        </li>
        
      </ul>
    </div>
  )
}

export default NavBarLoggedOut