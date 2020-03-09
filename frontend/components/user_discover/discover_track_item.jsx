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

  render() {
    const { track } = this.props
    let logo
    let button
    if (this.state.playing) {
      logo = "pause-button z1000"
      button = <img src={window.pause} alt="pause button" />
    } else {
      logo = "play-button z1000"
      button = <img src={window.play} alt="play button" />
    }

    return (
      <div className="discover-item" onClick={this.handlePlay()} >
        <div className="discover-art">
          <img src={track.albumArt} alt={`${track.title} album art`}/>
        </div>
        <div className="discover-buttons z1000">
          <div className={logo}>
            {button}
          </div>
        </div>
        <audio src={track.trackFile} ref={this.ref} />
      </div>
    )
  }
}

export default DiscoverTrackItem