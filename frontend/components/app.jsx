import React from 'react'
import { Route, Link } from 'react-router-dom'
import NavBarContainer from './nav_bar/nav_bar_container'
import SignupFormContainer from './login_form_container/signup_form_container'
import LoginFormContainer from './login_form_container/login_form_container'
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1><Link to="/">FidelityFog</Link></h1>
    </header>

    <Route exact path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
)

export default App