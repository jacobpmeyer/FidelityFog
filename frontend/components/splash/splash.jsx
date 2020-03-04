import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import { Link } from 'react-router-dom'

class Splash extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="banner">
        <NavBarContainer />
        <div className="splash-main">
          <div className="splash-message">
            <div className="splash-sub">
              <div className="splash-header">
                Discover more with FidelityFog Go+
              </div>
              <div className="splash-p">
                FidelityFog Go+ lets you listen offline, ad-free, 
                with over 150 million tracks — and growing.
              </div>
            </div>
          </div>
          <div className="splash-buttons">
            <div className="splash-button-1">
              <Link to="/">Learn more</Link>
              </div>
            <div className="splash-button-2">
              <Link to="/">Try it free for 30 days</Link>
              </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Splash