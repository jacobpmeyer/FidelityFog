import React from "react";
import { Link } from "react-router-dom";
import DiscoverTrackItemContainer from "./discover_track_item_container";

class DiscoverTracks extends React.Component {
  constructor(props) {
    super(props);
    // this.shuffled = null
  }

  render() {
    let tracks = this.props.tracks.map((track) => (
      <DiscoverTrackItemContainer
        key={track.id}
        track={track}
        updateCurrentTrack={this.props.updateCurrentTrack}
      />
    ));

    return <div className="discover-list">{tracks}</div>;
  }
}

export default DiscoverTracks;
