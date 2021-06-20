import React from 'react'
import { Header } from '../components'
import PropTypes from 'prop-types'
import Profiles from '../components/profiles'
import * as ROUTE from '../constants/routes'
import logo from '../logo/svg'

function SelectProfileContainer (props) {
  const { user, setProfile } = props
  return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo
                        to={ROUTE.HOME}
                        src={logo}
                        alt='Netflix'
                    />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>
                    {'Who\'s watching?'}
                </Profiles.Title>
                <Profiles.User
                    onClick={() => setProfile({
                      displayName: user.displayName,
                      photoURL: user.photoURL
                    })}
                >
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles>
        </>
  )
}

SelectProfileContainer.propTypes = {
  user: PropTypes.any,
  setProfile: PropTypes.any
}

export default SelectProfileContainer
