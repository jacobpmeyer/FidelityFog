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
      album_art: null,
      buttonContents: "Click to upload",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTrack = this.handleTrack.bind(this)
    this.handlArtwork = this.handlArtwork.bind(this)
    this.handleButton = this.handleButton.bind(this)
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
    if (this.state.album_art) {
      track.append("track[album_art]", this.state.album_art)
    }
    this.props.createTrack(track).then((track) => {
      return this.props.history.push(`/tracks/${track.track.id}`)
    }
    )
  }

  handleTrack(e) {
    this.setState({ track_file: e.currentTarget.files[0] })
  }

  handlArtwork(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      this.setState({ album_art: file, photoURL: fileReader.result })
    }
    if (file) {
      fileReader.readAsDataURL(file)
    }
  }

  handleButton(e) {
      this.setState({ buttonContents: <img src={window.loadingSpinner} /> })
  }


  render() {

    const preUpload = (
      <div className="user upload-content">
        <div className="pre-form-container">
          <div className="upload-greeting">
            Upload your tracks here
          </div>
          <input 
            type="file" 
            id="file" 
            className="pre-upload-input" 
            onChange={this.handleTrack}/>
          <label className="pre-upload-label" htmlFor="file">
            choose a file to upload
          </label>
          <div className="small-messages">
            <div className="small">
              Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.
            </div>
            <div className="vsmall">
              Or just MP3s if you hate us and yourself.
            </div>
          </div>
        </div>
      </div>
    )

    const errorList = this.props.errors.map((error, i) => (
      <li key={`error-${i}`}>
        {error}
      </li>
    ))

    let previewClass
    let preview
    if (this.state.photoURL) {
      preview = (
        <img src={this.state.photoURL} />
      )
      previewClass = "album-preview"
    } else {
      preview = (<><li>album</li> <li>art</li> <li>preview</li></>)
      previewClass = ("album-preview-empty")
    }

    if (this.state.track_file === null) {
      return preUpload
    } else {
      return (
        <div className="user upload-content">
          <div className="form-container">
            <div className={previewClass}>
              {preview}
            </div>
            <form className="upload-form" onSubmit={this.handleSubmit}>
              <div className="error-list big">
                {errorList}
              </div>
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
              <label>Track artwork
                <br />
                <input
                  className="file-input"
                  type="file"
                  onChange={this.handlArtwork}
                />
              </label>
              <button onClick={this.handleButton}>{this.state.buttonContents}</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default Upload