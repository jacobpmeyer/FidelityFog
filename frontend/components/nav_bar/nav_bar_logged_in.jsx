import React from 'react'

const NavBarLoggedIn = (props) => {
  return (
    <div className="nav-bar">
      <div className="logo">Logo</div>
      <ul>
        <li>{props.currentUser.username}</li>
        <li>
          <button onClick={props.handleLogout}>
            Log Out!
              </button>
        </li>
      </ul>
    </div>
  )
}

export default NavBarLoggedIn