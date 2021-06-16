/* eslint-disable react/no-unescaped-entities */
import React, {
  useContext,
  useState
} from 'react'
import {
  useHistory
} from 'react-router-dom'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import {
  FireBaseContext
} from '../context/firebase'
import * as ROUTES from '../constants/routes'

function SignUp () {
  const history = useHistory()
  const {
    firebase
  } = useContext(FireBaseContext)

  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = firstName === '' || password === '' ||
    emailAddress === ''

  const handleSignUp = event => {
    event.preventDefault()
    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1
          })
          .then(() => {
            history.push(ROUTES.BROWSE)
          })
      )
      .catch((error) => {
        setFirstName('')
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              value={password}
              autoComplete='off'
              type='password'
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit' data-testid='sign-up'>
              Sign up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to='/sign-in'>Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
    </>
  )
}

export default SignUp
