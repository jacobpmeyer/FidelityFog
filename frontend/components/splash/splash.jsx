import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { Link } from "react-router-dom";
import TrendingContainer from "../trending/TrendingContainer";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { openModal } = this.props;

    return (
      <div className="global">
        <div className="main-content">
          <div className="banner">
            <NavBarContainer />
            <div className="splash-main">
              <div className="splash-message">
                <div className="splash-sub">
                  <div className="splash-header">
                    Discover more with FidelityFog Go+
                  </div>
                  <div className="splash-p">
                    FidelityFog Go+ lets you listen offline, ad-free, with over
                    150 million tracks — and growing.
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
          <div className="trending">
            <h1 className="trending-headline">
              Hear what is trending for free in the FidelityFog community
            </h1>
            <TrendingContainer />
          </div>
          <div className="mobile-banner">
            <div className="device-photo"></div>
            <div className="mobile-teaser">
              <div className="teaser-header">Never stop lisening</div>
              <div className="teaser-body">
                FidelityFog is available on Web, iOS, Android, Sonos,
                Chromecast, and Xbox One.
              </div>
              <div className="mobile-links">
                <a
                  href="https://itunes.apple.com/us/app/soundcloud/id336353151?mt=8"
                  target="_blank"
                  className="apple"
                >
                  apple
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.soundcloud.android&amp;hl=us"
                  target="_blank"
                  className="google"
                ></a>
              </div>
            </div>
          </div>
          <div className="creator-teaser">
            <div className="creator-teaser-inner">
              <div className="creator-teaser-content">
                <h1 className="creator-teaser-header">Calling all creators</h1>
                <p className="creator-teaser-body">
                  Get on FidelityFog to connect with fans, share your sounds,
                  and grow your audience. What are you waiting for?
                </p>
              </div>
            </div>
          </div>
          <div className="signup-module">
            <div className="signup-module-title">
              Thanks for listening. Now join in.
            </div>
            <div className="signup-module-body">
              Save tracks, follow artists and build playlists. All for free.
            </div>
            <div className="signup-module-signup">
              <button
                className="signup-module-button"
                onClick={() => openModal("signup")}
              >
                Create account
              </button>
            </div>
            <div className="signup-module-login">
              Already have an account?
              <div
                className="signup-module-login-button"
                onClick={() => openModal("login")}
              >
                Sign in
              </div>
            </div>
          </div>
          <footer className="footer">
            <p>Created by Jacob Meyer</p>
            <div className="creator-links">
              <a href={`https://github.com/jacobpmeyer/`} alt="github">
                <i className="fab fa-github creator-link"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jacob-p-meyer/"
                alt="linkedin"
              >
                <i className="fab fa-linkedin creator-link"></i>
              </a>
              <a href={`https://angel.co/u/jacobpmeyer`}>
                <i
                  className="fab fa-angellist creator-link"
                  alt="angel list"
                ></i>
              </a>
              <a href={`https://jacobmeyer.dev`}>
                <i className="fas fa-portrait creator-link" alt="portfolio"></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Splash;
