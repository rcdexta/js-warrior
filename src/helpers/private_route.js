import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserSession from './user_session'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      UserSession.isLoggedIn()
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />
)

export default PrivateRoute
