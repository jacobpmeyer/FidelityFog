import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignupFormContainer from './login_form/signup_form_container'
import LoginFormContainer from './login_form/login_form_container'
import { AuthRoute } from '../util/route_util'
import DemoFormContainer from './demo_form/demo_form_container'
import SplashContainer from './splash/splash_container'
import Modal from './modal/modal'

const App = () => (
  <div className="main-content">
    <Modal />
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route path="*" component={SplashContainer } />
    </Switch>

  </div>
)

export default App