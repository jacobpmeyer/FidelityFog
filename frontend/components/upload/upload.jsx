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
      track_file: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const track = new FormData()
    track.append("track[title]", this.state.title)
    track.append("track[artist_name]", this.state.artist_name)
    track.append("track[artist_id]", this.state.artist_id)
    track.append("track[description]", this.state.description)
    track.append("track[track_file]", this.state.track_file)
    track.append("hello", "goodbye")
    this.props.createTrack(track)
  }

  handleFile(e) {
    this.setState({ track_file: e.currentTarget.files[0] })
  }

  render() {
    return (
      <div className="user upload-content">
        <UserNavBarContainer />
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
              onChange={this.handleFile}
            />
          </label>
          <button>Click to upload</button>
        </form>
      </div>
    )
  }
}

export default Upload