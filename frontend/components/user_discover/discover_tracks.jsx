import React from 'react'
import { Link } from 'react-router-dom'
import DiscoverTrackItemContainer from './discover_track_item_container'


class DiscoverTracks extends React.Component {
  constructor(props) {
    super(props)
    // this.shuffled = null
  }

  render() {
    let potato = this.props.tracks

    // for (let i = potato.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * i)
    //   const temp = potato[i]
    //   potato[i] = potato[j]
    //   potato[j] = temp
    // }

    let tracks = potato.map(track => (
      <DiscoverTrackItemContainer
        key={track.id} 
        track={track} 
        updateCurrentTrack={this.props.updateCurrentTrack}
      />
    ))
    return (
      <div className="discover-list">
        {tracks}
      </div>
    )
  }
}

export default DiscoverTracks