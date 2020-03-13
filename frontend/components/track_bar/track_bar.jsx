import React from 'react'

class TrackBar extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
    this.state = {
      startTime: "0:00",
      endTime: "0:00",
      audio: null,
      width: 0,
      volumeHeight: 0,
      volumeModalOpen: false
    }
    this.currentTime = this.currentTime.bind(this)
    this.totalTime = this.totalTime.bind(this)
    this.handleProgressClick = this.handleProgressClick.bind(this)
    this.handleVolumeClick = this.handleVolumeClick.bind(this)
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    const { currentTrack, playing } = this.props
    if (playing) {
      this.ref.current.play();
      const audio = this.ref.current
      if (!this.interval) {
        this.interval = setInterval(() => {
          const percentage = (audio.currentTime / audio.duration) * 100
          this.setState({
            width: percentage,
            startTime: this.currentTime(audio),
            endTime: this.totalTime(audio)
          })
        }, 1000)
      }
    } else if (playing === false && currentTrack.id) {
      this.ref.current.pause()
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    } else {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    }
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval)
  }

  handlePlay() {
    if (this.props.playing) {
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

  totalTime(audio) {
    let length
    if (audio) {
      length = audio.duration
      this.length = audio.duration
    } else {
      length = 0
      this.length = 0
    }
    const minutes = Math.floor(length / 60)
    const seconds_str = (length - minutes * 60).toString()
    const seconds = seconds_str.substr(0, 2)
    const time = (
      minutes + ":" + (
        seconds < 10 ? "0" + seconds.substr(0) : seconds
      )
    )
    return time;
  }

  currentTime(audio) {
    let currentTime
    if (audio) {
      currentTime = audio.currentTime
      this.current = audio.currentTime
    } else {
      currentTime = 0
      this.current = 0
    }
    const current_minute = parseInt(currentTime / 60) % 60
    const current_seconds = (currentTime % 60).toFixed()
    const current_time = (
      current_minute + ":" + (
        current_seconds < 10 ? "0" + current_seconds : current_seconds
      )
    )
    return current_time;
  }

  handleProgressClick(e) {
    const audio = this.ref.current
    if (audio.duration) {
      const percentage = Math.floor((e.nativeEvent.offsetX / 512) * 100)
      audio.currentTime = (percentage / 100) * audio.duration
    }
  }

  handleVolumeClick(e) {
    const audio = this.ref.current
    if (audio.volume) {
      const percentage = Math.floor((e.nativeEvent.offsetY / -80) * 100) / 100 + 100 / 100
      audio.volume = percentage
    }
  }
  
  render() {
    const { currentTrack, playing } = this.props
    const ref = this.ref.current
    let playButton
    let art
    let details = null
    let audio = null
    
    if (playing) {
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

    if (currentTrack) {
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

    const progressBarWidth = {
      width: `${this.state.width}%`
    }

    let volumeHeight
    if (ref) {
      volumeHeight = {
        height: `${ref.volume * 100}%`
      }
    } else {
      volumeHeight = {
        height: 0
      }
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
              {this.state.startTime}
            </div>
            <div className="track-bar-progress-outer" onClick={this.handleProgressClick}>
              <div id="track-bar-progress-middle">
                <div className="track-bar-progress-inner" style={progressBarWidth}>
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="end-time">
              {this.state.endTime}
            </div>
          </div>
          <button 
            className="track-bar-button bar-volume" 

            >
            <img src={window.track_bar_volume} alt="volume button" />
            <div className="modal-container">
              <div className="track-bar-volume">
                <div 
                  className="track-bar-volume-middle" 
                  onClick={this.handleVolumeClick}>
                  <div className="track-bar-volume-inner" style={volumeHeight}>

                  </div>
                </div>
              </div>
            </div>
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