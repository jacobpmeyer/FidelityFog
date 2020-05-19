import React, { useEffect } from "react";
import DiscoverTracksContainer from "../user_discover/discover_tracks_container";

export default ({ fetchAllTracks, fetchTrack, tracks }) => {
  useEffect(() => {
    // fetchTrack("1");
    // fetchTrack("2");
    fetchAllTracks();
  }, [tracks.length]); // Only re-run the effect if count changes

  for (let i = tracks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = tracks[i];
    tracks[i] = tracks[j];
    tracks[j] = temp;
  }

  tracks = tracks.slice(0, 12);

  if (tracks === null) {
    return null;
  } else {
    return <DiscoverTracksContainer tracks={tracks} />;
  }
};
