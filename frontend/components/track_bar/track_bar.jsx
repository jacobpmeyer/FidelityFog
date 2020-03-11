import React from 'react'

class TrackBar extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="track-bar-container">
        <div className="track-bar-controls">
          <button className="track-bar-button bar-previous">
            <img src={window.track_bar_previous} alt="previous button" />
          </button>
          <button className="track-bar-button bar-play">
            <img src={window.track_bar_play} alt="play button" />
          </button>
          <button className="track-bar-button bar-next">
            <img src={window.track_bar_next} alt="next button" />
          </button>
          <button className="track-bar-button bar-shuffle-before">
            <img src={window.track_bar_shuffle_before} alt="shuffle button" />
          </button>
          <button className="track-bar-button bar-repeat-before">
            <img src={window.track_bar_repeat_before} alt="repeat button" />
          </button>
        </div>
      </div>
    )
  }
}

export default TrackBar