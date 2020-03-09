import React from 'react'
import { Link } from 'react-router-dom' 

class IndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
    this.ref = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay() {
    if (this.state.playing) {
      return() => {
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

  render() {
    const {track} = this.props
    let logo
    let button
    if (this.state.playing) {
      logo = "pause-button"
      button = <img src={window.pause} alt="pause button" />
    } else {
      logo = "play-button"
      button = <img src={window.play} alt="play button" />
    }

    return(
      <div className="track-index-item">
        <div className="index-album-artwork">
          <img src={track.albumArt} />
        </div>
        <div className="track-details">
          <div className={logo} onClick={this.handlePlay()}>
            {button}
          </div>
          <ul>
            <li className="artist-link">
              <Link to={`/users/${track.artistId}`}>
                {track.artistName}
              </Link>
            </li>
            <li className="track-link">
              <Link to={`/tracks/${track.id}`}>
                {track.artistName} - {track.title}
              </Link>
            </li>
          </ul>
          <audio src={track.trackFile} ref={this.ref} />
        </div>
      </div>
    )
  }
}

export default IndexItem