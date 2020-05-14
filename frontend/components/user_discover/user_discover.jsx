import React from "react";
import DiscoverTracksContainer from "./discover_tracks_container";

class UserDiscover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.tracks.length === 0) {
      this.props.fetchAllTracks();
    }
  }

  render() {
    const { tracks } = this.props;

    for (let i = tracks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = tracks[i];
      tracks[i] = tracks[j];
      tracks[j] = temp;
    }

    if (tracks === null) {
      return null;
    } else {
      return (
        <div className="user">
          <DiscoverTracksContainer tracks={tracks} />
        </div>
      );
    }
  }
}

export default UserDiscover;
