import React from 'react'
import IndexItem from './index_item'

class Index extends React.Component {
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