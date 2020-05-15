import React from "react";
import DiscoverTracksContainer from "./discover_tracks_container";

class UserDiscover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: null,
    };
    this.shuffleTracks = this.shuffleTracks.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { tracks, fetchTrack, fetchAllTracks } = this.props;
    if (tracks.length === 0) {
      // fetchTrack("1");
      // fetchTrack("2");
      fetchAllTracks().then(() => {
        const { tracks } = this.props;
        this.setState({ tracks: this.shuffleTracks(tracks) });
      });
    } else {
      this.setState({ tracks: this.shuffleTracks(tracks) });
    }
  }

  shuffleTracks(tracks) {
    for (let i = tracks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = tracks[i];
      tracks[i] = tracks[j];
      tracks[j] = temp;
    }
    return tracks;
  }

  render() {
    const { tracks } = this.state;

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
