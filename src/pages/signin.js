/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react'
import { Form } from '../components'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { FireBaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

function SignIn () {
  const [emailAddress, setEmailAddress] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState('')
  const { firebase } = useContext(FireBaseContext)
  const isInvalid = password === '' || emailAddress === ''
  const handleSignin = event => {
    event.preventDefault()

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>
                        Sign In
                    </Form.Title>
                    {error &&
                        <Form.Error>
                            {error}
                        </Form.Error>
                    }

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Submit
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to='/sign-up'>Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
  )
}

export default SignIn
