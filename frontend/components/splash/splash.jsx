import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'

class Splash extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="splash-main">
        <NavBarContainer />
        <div className="splash-message">
          <div className="splash-header">
            Discover more with SoundCloud Go+
          </div>
          <div className="splash-p">
            SoundCloud Go+ lets you listen offline, ad-free, 
            with over 150 million tracks — and growing.
          </div>
        </div>
      </div>
    )
  }
}

export default Splash