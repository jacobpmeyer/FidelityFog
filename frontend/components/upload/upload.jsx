import React from 'react'
import UserNavBarContainer from '../nav_bar/user_nav_bar_container'

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artist_name: this.props.currentUser.username,
      artist_id:this.props.currentUser.id,
      title: "",
      description: "",
      track_file: null,
      album_art: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTrack = this.handleTrack.bind(this)
    this.handlArtwork = this.handlArtwork.bind(this)
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const track = new FormData();
    track.append("track[title]", this.state.title)
    track.append("track[artist_name]", this.state.artist_name)
    track.append("track[artist_id]", this.state.artist_id)
    track.append("track[description]", this.state.description)
    track.append("track[track_file]", this.state.track_file)
    track.append("track[album_art]", this.state.album_art)
    this.props.createTrack(track).then(
      track => this.props.history.push(`/tracks/${track.id}`)
    )
  }

  handleTrack(e) {
    this.setState({ track_file: e.currentTarget.files[0] })
  }

  handlArtwork(e) {
    this.setState({ album_art: e.currentTarget.files[0] })
  }

  render() {
    return (
      <div className="user upload-content">
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <h1>Upload your track</h1>
          <label>Title
            <br/>
            <input 
              type="text"
              value={this.state.title}
              onChange={this.handleChange("title")}
            />
          </label>
          <label>Description 
            <br/>
            <input 
            type="text"
            value={this.state.description}
            onChange={this.handleChange("description")} />
          </label>
          <label>Track file
            <br/>
            <input 
              className="file-input" 
              type="file"
              onChange={this.handleTrack}
            />
          </label>
          <label>Track artwork
            <br />
            <input
              className="file-input"
              type="file"
              onChange={this.handlArtwork}
            />
          </label>
          <button>Click to upload</button>
        </form>
      </div>
    )
  }
}

export default Upload