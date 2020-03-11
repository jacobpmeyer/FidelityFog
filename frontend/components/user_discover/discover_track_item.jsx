import React from 'react'
import { Link } from 'react-router-dom'

class DiscoverTrackItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
    this.ref = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay() {
    const currentTrack = this.props.currentTrack
    if (currentTrack.playing && this.props.track.id === currentTrack.id) {
      return () => {
        this.props.pauseTrack()
        this.props.updateCurrentTrack(this.props.track)
        this.setState({ playing: false })
      }
    } else if (currentTrack.playing) {
      return () => {
        this.props.pauseTrack()
        this.props.updateCurrentTrack(this.props.track)
        this.setState({ playing: true })
        this.props.playTrack()
      }
    } else {
      return () => {
        this.props.updateCurrentTrack(this.props.track)
        this.props.playTrack()
        this.setState({ playing: true })
      }
    }
  }



  render() {
    const { track } = this.props

    let logo
    let button
    if (this.props.currentTrack.playing && this.props.currentTrack.id === track.id) {
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
              className="discover-art shadow"
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