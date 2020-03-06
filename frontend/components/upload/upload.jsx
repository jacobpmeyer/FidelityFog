import React from 'react'
import UserNavBarContainer from '../nav_bar/user_nav_bar_container'

class Upload extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="user upload-content">
        <UserNavBarContainer />
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <h1>Upload your track</h1>
          <label>Title
            <br/>
            <input type="text"/>
          </label>
          <label>Description 
            <br/>
            <input type="text" />
          </label>
          <button>Choose a track to upload</button>
        </form>
      </div>
    )
  }
}

export default Upload