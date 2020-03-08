import React from 'react'

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.match.params.trackId)
    this.props.fetchTrack(this.props.match.params.trackId)
  }

  render() {
    return (
      <div className="user">
      </div>
    )
  }
}

export default TrackShow