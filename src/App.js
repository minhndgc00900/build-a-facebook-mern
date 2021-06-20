/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  // Switch,
  Route
} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import PrivateRoute from './helpers/routes'
import {
  Browse,
  Home,
  SignIn,
  SignUp
} from './pages'
// import { IsUserRedirect } from './helpers/routes'

function App () {
  const [user, setUser] = useState({
    userName: 'martin',
    password: '121121'
  })

  return (
    <Router>
      <PrivateRoute
        path={ROUTES.HOME}
        user={user}
        // setUser={param => setUser(param)}
      >
          <Home />
      </PrivateRoute>
      {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
      <Route
        path={ROUTES.SIGN_IN}
        component={SignIn} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <PrivateRoute
        path={ROUTES.BROWSE}
        user={user}
      >
          <Browse />
      </PrivateRoute>
    </Router>
  )
};

export default App
