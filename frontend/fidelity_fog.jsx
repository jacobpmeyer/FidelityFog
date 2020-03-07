import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { fetchAllTracks } from './util/track_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store
  window.fetchAllTracks = fetchAllTracks
  
  ReactDOM.render(<Root store={store} />, root)
})

