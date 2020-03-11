import React from 'react'

class TrackBar extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidUpdate() {
    console.log(this.props.currentTrack)
    const currentTrack = this.props.currentTrack
    if (currentTrack.playing) {
      this.ref.current.play();
    } else if (currentTrack.playing === false && currentTrack.id) {
      this.ref.current.pause()
    }
  }

  handlePlay() {
    console.log(this.props.currentTrack.playing)
    if (this.props.currentTrack.playing) {
      return () => {
        this.props.pauseTrack()
        this.props.updateCurrentTrack(this.props.track)
        this.ref.current.pause()
      }
    } else {
      return () => {
        this.props.updateCurrentTrack(this.props.track)
        this.props.playTrack()
        this.ref.current.play()
      }
    }
  }

  render() {
    if (this.props.currentTrack.playing) {
      this.ref.play
    }
    let { currentTrack } = this.props
    let art = window.noart
    let details = null
    let audio = null
    if (currentTrack) {
      if (currentTrack.albumArt) {
        audio = <audio src={currentTrack.trackFile} ref={this.ref} />
        art = (
          <div className="track-bar-art">
            <img src={currentTrack.albumArt} />
          </div>
        )
        details = (
          <div className="track-bar-name-title">
            <div className="track-bar-name">
              {currentTrack.artistName}
            </div>
            <div className="track-bar-title">
              {currentTrack.title}
            </div>
          </div>
        )
      }
    } else {
      art = window.noart
    }

    let playButton
    if (this.props.currentTrack.playing) {
      playButton = (
        <button className="track-bar-button bar-pause" onClick={this.handlePlay()}>
          <img src={window.track_bar_pause} alt="pause button" />
        </button>
      )
    } else {
      playButton = (
        <button className="track-bar-button bar-play" onClick={this.handlePlay()}>
          <img src={window.track_bar_play} alt="play button" />
        </button>
      )
    }

    return (
      <div className="track-bar-container">
        <div className="track-bar-controls">
          <button className="track-bar-button bar-previous">
            <img src={window.track_bar_previous} alt="previous button" />
          </button>
          {playButton}
          <button className="track-bar-button bar-next">
            <img src={window.track_bar_next} alt="next button" />
          </button>
          <button className="track-bar-button bar-shuffle-before">
            <img src={window.track_bar_shuffle_before} alt="shuffle button" />
          </button>
          <button className="track-bar-button bar-repeat-before">
            <img src={window.track_bar_repeat_before} alt="repeat button" />
          </button>
          <div className="track-bar-progress">
            
          </div>
          <button className="track-bar-button bar-volume">
            <img src={window.track_bar_volume} alt="volume button" />
          </button>
          <div className="track-bar-details">
            {art}
            {details}
          </div>
        </div>
        {audio}
      </div>
    )
  }
}

export default TrackBar