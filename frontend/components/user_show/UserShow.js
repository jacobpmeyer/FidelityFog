import React, { useEffect } from "react";
import DiscoverTracksContainer from "../user_discover/discover_tracks_container";

const UserShow = ({ user, fetchUser, match }) => {
  useEffect(() => {
    if (!user) {
      fetchUser(match.params.userId).then(() => {});
    }
  });

  let bannerUrl = null;
  if (user && user.banner) {
    bannerUrl = { backgroundImage: `url(${user.banner})` };
  }

  let avatarUrl = null;
  if (user && user.avatar) {
    avatarUrl = { backgroundImage: `url(${user.avatar})` };
  }

  const name = user ? user.displayName || user.username : null;

  if (user) {
    return (
      <div className="user">
        <div className="user-show-page">
          <div style={bannerUrl} className="user-banner">
            <div style={avatarUrl} className="user-avatar"></div>
            <div className="username-wrapper">
              <h1>{name}</h1>
            </div>
          </div>
          <h1 className="user-show-tracks-header">
            Check out these tracks from {name}
          </h1>
          <div className="user-show-tracks-list">
            <DiscoverTracksContainer tracks={Object.values(user.tracks)} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UserShow;
