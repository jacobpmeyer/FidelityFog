import React from 'react'

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default TrackShow