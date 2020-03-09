import React from 'react'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlArtwork = this.handlArtwork.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId).then(
      track => this.setState(track.track)
    )
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateTrack(this.state).then(
      this.props.history.push(`/tracks/${this.props.track.id}`)
    )
  }

  handlArtwork(e) {
    this.setState({ album_art: e.currentTarget.files[0] })
  }

  render() {
    const { track } = this.props

    if (track === undefined) {
      return null
    } else {
      return (
        <div className="user upload-content">
          <form className="upload-form" onSubmit={this.handleSubmit}>
            <h1>Edit {track.title}</h1>
            <label>Title
              <br />
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleChange("title")}
              />
            </label>
            <label>Description
              <br />
              <input
                type="text"
                value={this.state.description}
                onChange={this.handleChange("description")} />
            </label>
            <button>Click to edit</button>
          </form>
        </div>
      )
    }
  }
}

export default Edit