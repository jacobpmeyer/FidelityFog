import React from 'react'

class IndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
    this.ref = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay() {
    if (this.state.playing) {
      return() => {
        this.setState({ playing: false })
        this.ref.current.pause()
      }
    } else {
      return () => {
        this.setState({ playing: true })
        this.ref.current.play()
      }
    }
  }

  render() {
    const {track} = this.props
    return(
      <div>
        <h4 >{track.title}</h4>
        <br/>
        <button onClick={this.handlePlay()}>play</button>
        <br/>
        {/* <button onClick={this.handlePause()}>pause</button> */}
        <audio src={track.trackFile} ref={this.ref} />
      </div>
    )
  }
}

export default IndexItem