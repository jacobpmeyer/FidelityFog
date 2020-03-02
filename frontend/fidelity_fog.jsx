import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")
  // const store = configureStore()

  ReactDOM.render(<div>Hello from the frontend index</div>, root)
})

