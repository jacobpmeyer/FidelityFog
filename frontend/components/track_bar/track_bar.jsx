import React from 'react'

class TrackBar extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
    this.state = {
      startTime: "0:00",
      endTime: null
    }
  }

  componentDidMount() {
    // console.log(this.props.currentTrack)
  }

  componentDidUpdate() {
    const currentTrack = this.props.currentTrack
    if (currentTrack.playing) {
      this.ref.current.play();
    } else if (currentTrack.playing === false && currentTrack.id) {
      this.ref.current.pause()
    }
  }

  handlePlay() {
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

  totalTime() {
    const audio = document.getElementById("audio")
    console.log(audio)
    const length = audio ? audio.duration : 0
    const minutes = Math.floor(length / 60)
    const seconds_str = (length - minutes * 60).toString()
    const seconds = seconds_str.substr(0, 2)
    const time = minutes + ':' + seconds
    return time;
  }

  currentTime() {
    const audio = document.getElementById("audio")
    console.log(audio)
    const currentTime = audio ? audio.currentTime : 0
    const current_minute = parseInt(currentTime / 60) % 60
    const current_seconds = (currentTime % 60).toFixed()
    const current_time = (
      current_minute + ":" + (
        current_seconds < 10 ? "0" + current_seconds : current_seconds
      )
    )
    return current_time;
  }
  
  render() {
    const { currentTrack } = this.props
    let playButton
    let art
    let details = null
    let audio = null
    let startTime
    let endTime
    
    if (this.props.currentTrack.playing) {
      this.ref.play
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

    if (currentTrack.albumArt) {
      audio = <audio id="audio" src={currentTrack.trackFile} ref={this.ref} />
      art = <img src={currentTrack.albumArt} />
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
    } else {
      art = <img src={window.noart} alt="no album selected" />
    }

    if (audio) {
      startTime = (this.currentTime())
      endTime = (this.totalTime())
    } else {
      startTime = "0:00"
      endTime = "0:00"
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
          <div className="track-bar-progress-container">
            <div className="start-time">
              {startTime}
            </div>
            <progress className="track-bar-progress" value="0" max="1"></progress>
            <div className="end-time">
              {endTime}
            </div>
          </div>
          <button className="track-bar-button bar-volume">
            <img src={window.track_bar_volume} alt="volume button" />
          </button>
          <div className="track-bar-details">
            <div className="track-bar-art">
              {art}
            </div>
            {details}
          </div>
        </div>
        {audio}
      </div>
    )
  }
}

export default TrackBar