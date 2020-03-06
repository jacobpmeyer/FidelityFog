import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { openModal } from './actions/modal_actions'
import { createTrack } from './actions/track_actions'

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
  window.openModal = openModal
  window.createTrack = createTrack
  
  ReactDOM.render(<Root store={store} />, root)
})

