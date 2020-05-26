import React, { useEffect, useState } from "react";
import DiscoverTracksContainer from "../user_discover/discover_tracks_container";

export default ({ fetchAllTracks, fetchTrack, tracks }) => {
  const [trackOrder, setTrackOrder] = useState(null);

  useEffect(() => {
    if (!trackOrder) {
      fetchAllTracks().then(() => {
        setTrackOrder(shuffleTracks(tracks).slice(0, 12));
      });
    }
  }, [tracks.length]); // Only re-run the effect if tracks.length changes

  const shuffleTracks = (tracks) => {
    for (let i = tracks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = tracks[i];
      tracks[i] = tracks[j];
      tracks[j] = temp;
    }
    return tracks;
  };

  if (trackOrder === null) {
    return null;
  } else {
    return <DiscoverTracksContainer noTrackShow={true} tracks={trackOrder} />;
  }
};
