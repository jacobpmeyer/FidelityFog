import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import Modal from "./modal/modal";
import UserDiscoverContainer from "./user_discover/user_discover_container";
import UploadContainer from "./upload/upload_container";
import TrackShowContainer from "./track/track_show_container";
import UserNavBarContainer from "./nav_bar/user_nav_bar_container";
import EditContainer from "./edit/edit_container";
import TrackBarContainer from "./track_bar/track_bar_container";
import SearchResultsContainer from "./search/SearchResultsContainer";

const App = () => {
  return (
    <div>
      <Modal />
      <ProtectedRoute path="/" component={UserNavBarContainer} />
      <Switch>
        <AuthRoute path="/splash" component={SplashContainer} />
        <ProtectedRoute path="/search" component={SearchResultsContainer} />
        <ProtectedRoute path="/discover" component={UserDiscoverContainer} />
        <ProtectedRoute path="/upload" component={UploadContainer} />
        <ProtectedRoute
          path="/tracks/:trackId/edit"
          component={EditContainer}
        />
        <ProtectedRoute
          path="/tracks/:trackId"
          component={TrackShowContainer}
        />
        <AuthRoute path="/" component={SplashContainer} />
        <Redirect to="/" />
      </Switch>
      <Route path="/" component={TrackBarContainer} />
    </div>
  );
};

export default App;
