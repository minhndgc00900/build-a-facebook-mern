import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { FireBaseContext } from './context/firebase'
import { GlobalStyles } from './global-styles'
import { firebase } from './lib/firebase.prod'

render(
    <>
        <FireBaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FireBaseContext.Provider>
    </>,
    document.getElementById('root'))
