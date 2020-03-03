import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { signup } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  const store = configureStore()

  window.store = store
  window.signup = signup
  
  ReactDOM.render(<Root store={store} />, root)
})

