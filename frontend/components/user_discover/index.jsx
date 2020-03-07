import React from 'react'
import IndexItem from './index_item'

class Index extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    const tracks = this.props.tracks.map(track => (
      <IndexItem key={track.id} track={track}/>
    ))
    return (
      <div>
        {tracks}
      </div>
    )
  }
}

export default Index