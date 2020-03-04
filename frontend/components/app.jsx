import React from 'react'
import { Route, Link } from 'react-router-dom'
import NavBarContainer from './nav_bar/nav_bar_container'
import SignupFormContainer from './login_form/signup_form_container'
import LoginFormContainer from './login_form/login_form_container'
import { AuthRoute } from '../util/route_util'
import DemoFormContainer from './demo_form/demo_form_container'
import SplashContainer from './splash/splash_container'

const App = () => (
  <div className="main-content">
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/demo" component={DemoFormContainer} />
  </div>
)

export default App