import React from 'react'
import { Link } from 'react-router-dom'

class DiscoverTrackItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      isMouseInside: false
    }
    this.ref = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handlePlay() {
    if (this.state.playing) {
      return () => {
        this.setState({ playing: false })
        this.ref.current.pause()
      }
    } else {
      return () => {
        this.setState({ playing: true })
        this.ref.current.play()
      }
    }
  }

  handleEnter() {
    this.setState({ isMouseInside: true })
  }

  handleLeave() {
    this.setState({ isMouseInside: false })
  }

  render() {
    const { track } = this.props
    let logo
    let button
    if (this.state.playing) {
      logo = "pause-button"
      button = <img src={window.pause} alt="pause button" />
    } else {
      logo = "play-button"
      button = <img src={window.play} alt="play button" />
    }

    let art
    if (track.albumArt) {
      art = <img src={track.albumArt} alt={`${track.title} album art`} />
    } else {
      art = null
    }

    return (
      <div className="discover-item-outer-container">
        <div className="discover-track-details">
          <div className="discover-item">
            <Link
              to={`/tracks/${track.id}`}
              className="discover-art" 
              onMouseEnter={this.handleEnter} 
              onMouseLeave={this.handleLeave}
            >
              {art}
            </Link>
            <div className="discover-buttons" onClick={this.handlePlay()}>
              <div className={logo}>
                {button}
              </div>
            </div>
            <audio src={track.trackFile} ref={this.ref} />
          </div>
          <Link to={`/tracks/${track.id}`}>
            {track.artistName} - {track.title} 
          </Link>
        </div>
      </div>
    )
  }
}

export default DiscoverTrackItem