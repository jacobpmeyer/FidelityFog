import React from 'react'
import { Link } from 'react-router-dom'
import DiscoverTrackItem from './discover_track_item'


class DiscoverTracks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let potato = this.props.tracks

    for (let i = potato.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = potato[i]
      potato[i] = potato[j]
      potato[j] = temp
    }

    let tracks = potato.map(track => (
      <DiscoverTrackItem key={track.id} track={track} />
    ))
    return (
      <div className="discover-list">
        {tracks}
      </div>
    )
  }
}

export default DiscoverTracks