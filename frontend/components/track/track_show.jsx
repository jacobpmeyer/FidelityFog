import React from 'react'

class TrackShow extends React.Component {
  constructor(props) {
    super(props)  
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
  }

  render() {
    console.log(this.props.track)
    const { track } = this.props
    if (this.props.track === undefined) {
      return null
    } else {
      return (
        <div className="user">
          {track.title}
          <div class="track-button">
            <img src={window.play} alt="play button" />
          </div>
          <div class="track-button">
            <img src={window.pause} alt="pause button" />
          </div>
        </div>
      )
    }
  }
}

export default TrackShow