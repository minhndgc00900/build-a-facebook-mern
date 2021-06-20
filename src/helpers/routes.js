/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import * as ROUTES from '../constants/routes'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute (props) {
  const { user, children, ...rest } = props
  console.log(232, !!user)
  const checkUserRedirect = () => {
    return !!user
      ? children
      : (<Redirect to={{
          pathname: ROUTES.SIGN_IN
        }} />)
  }

  return (
        <Route
            {...rest}
            render={checkUserRedirect}
        />
  )
}

PrivateRoute.propTypes = {
  user: PropTypes.any,
  children: PropTypes.any
}

export default PrivateRoute
