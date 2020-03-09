import React from 'react'
import { Link } from 'react-router-dom'

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
    this.ref = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
  }

  handlePlay() {
    if (this.state.playing) {
      return () => {
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

  handleDestroy(e) {
    this.props.deleteTrack(this.props.track.id).then(
      this.props.history.push("/")
    )
  } 

  render() {
    const { track, currentUser } = this.props
    console.log(track)
    let logo
    let button
    if (this.state.playing) {
      logo = "pause-button track-button-show"
      button = <img src={window.pause} alt="pause button" />
    } else {
      logo = "play-button track-button-show"
      button = <img src={window.play} alt="play button" />
    }

    let deleteButton;
    let editButton;
    const artistId = this.props.track ? track.artistId : null
    if (currentUser.id === artistId) {
      deleteButton = (
        <div className="delete-button">
          <button onClick={this.handleDestroy}>Delete Track</button>
        </div>
      )
      editButton = (
        <div className="edit-button">
          <Link to={`/tracks/${track.id}/edit`}>Edit Track</Link>
        </div>
      )
    } else {
      deleteButton = null
      editButton = null
    }

    if (this.props.track === undefined) {
      return null
    } else {
      return (
        <div className="user-show">
          <div className="track-show">
            <div className="left-show-elements">
              <div className="track-details-show">
                <div className={logo} onClick={this.handlePlay()}>
                  {button}
                </div>
                <ul>
                  <li className="artist-link-show">
                    <Link to={`/users/${track.artistId}`}>
                      {track.artistName}
                    </Link>
                  </li>
                  <li className="track-link-show">
                      {track.artistName} - {track.title}
                  </li>
                </ul>
              </div>
              <div className="show-buttons">
                
                  {deleteButton}
                
                
                  {editButton}
                
              </div>
            </div>
            <div className="album-art">
              <img src={track.albumArt} alt={`${track.title} album art`}/>
            </div>
          </div>
          <audio src={track.trackFile} ref={this.ref} />
        </div>
      )
    }
  }
}

export default TrackShow