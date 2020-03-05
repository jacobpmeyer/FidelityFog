import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'
import SplashContainer from './splash/splash_container'
import Modal from './modal/modal'

const App = () => {
  return (
    <div className="main-content">
      <Modal />
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <Route path="*" component={SplashContainer } />
      </Switch>

    </div>
  )
}


export default App