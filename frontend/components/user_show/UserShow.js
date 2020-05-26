import React, { useState, useEffect } from "react";

const UserShow = ({ user, fetchUser, match }) => {
  useEffect(() => {
    if (!user) {
      fetchUser(match.params.userId).then(() => {});
    }
  });

  let imageUrl = null;
  if (user && user.banner) {
    imageUrl = { backgroundImage: `url(${user.banner})` };
  }

  if (user) console.log(user.tracks);

  if (user) {
    return (
      <div className="user">
        <div className="user-show">
          <div style={imageUrl} className="user-banner"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UserShow;
