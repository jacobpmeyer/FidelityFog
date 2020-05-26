import React, { useState, useEffect } from "react";

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

  if (user) console.log(user.tracks);

  if (user) {
    return (
      <div className="user">
        <div className="user-show">
          <div style={bannerUrl} className="user-banner">
            <div style={avatarUrl} className="user-avatar"></div>
            <h1>{user.displayName || user.username}</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UserShow;
