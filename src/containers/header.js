import React from 'react'
import { Header } from '../components';
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

function HeaderContainer(props) {
    return (
        <Header {...props}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='Netflix' src={logo} />
                <Header.Button to={ROUTES.SIGN_IN}>Sign in</Header.Button>
            </Header.Frame>
            {props.children}
        </Header>
    )
}

export { HeaderContainer }
