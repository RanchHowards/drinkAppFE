import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (token ? children : <Redirect to="/register" />)}
    />
  )
}
export default PrivateRoute
