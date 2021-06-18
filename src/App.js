/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  // Switch,
  Route
} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {
  Browse,
  Home,
  SignIn,
  SignUp
} from './pages'
// import { IsUserRedirect } from './helpers/routes'

function App () {
  const user = {}

  const isUserRedirect = children => {
    user
      ? children
      : (
      <Redirect to={{
        pathname: ROUTES.SIGN_IN
      }} />
        )
  }

  return (
    <Router>
      <Route exact
        path={ROUTES.HOME}
        component={Home}
        render={isUserRedirect(ROUTES.SIGN_IN, ROUTES.HOME)}
      />
      <Route
        path={ROUTES.SIGN_IN}
        component={SignIn} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Route exact path={ROUTES.BROWSE} component={Browse} />
    </Router>
  )
};

export default App
