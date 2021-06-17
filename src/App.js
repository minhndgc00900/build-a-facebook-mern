import React from 'react'
import {
  BrowserRouter as Router,
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
import { IsUserRedirect } from './helpers/routes';

function App () {
  const user = {};

  const isUserRedirect = (children, loggedInPath) => {
    !user ? children : (
      <Redirect to={{
          pathname: loggedInPath,
      }} />
  )
  }

  return (
    <Router>
      <Route exact 
        path={ROUTES.HOME} 
        component={Home} 
        render={isUserRedirect(ROUTES.SIGN_IN ,ROUTES.HOME)}
      />
      <Route 
        path={ROUTES.SIGN_IN} 
        component={SignIn}  />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Route exact path={ROUTES.BROWSE} component={Browse} />
    </Router>
  )
};

export default App
