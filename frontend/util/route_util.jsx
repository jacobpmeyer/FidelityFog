import { withRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/discover" />
    }
  />
)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/splash" />
    }
  />
)

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
}

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
) 

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
)