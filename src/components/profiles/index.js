import React from 'react'
import { Container, List, Item, Picture, Name } from './styles/profiles'
import PropTypes from 'prop-types'

export default function Profiles (props) {
  return <Container {...props}></Container>
}

Profiles.List = function ProfileList (props) {
  return <List {...props}></List>
}

Profiles.User = function ProfileUser (props) {
  return <Item {...props}></Item>
}

Profiles.Picture = function ProfilePicture (props) {
  const { src } = props
  return <Picture {...props}
    src={src
      ? `/images/users/${src}.png`
      : '/images/,isc/loading.gif'}
/>
}

Profiles.Name = function ProfileName (props) {
  return <Name {...props}></Name>
}

Profiles.Picture.propTypes = {
  src: PropTypes.any
}
