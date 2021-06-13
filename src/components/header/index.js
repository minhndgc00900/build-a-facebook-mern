import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom';
import { 
    Background, 
    Container, 
    Logo, 
    ButtonLink
} from './styles/header';

function Header(props) {
    const { bg = true, children } = props; 
    return (
        bg ? <Background {...props} />
        : children
    )
}

Header.Frame = function HeaderFrame(props){
    return (
        <Container {...props}></Container>
    )
}

Header.Button = function HeaderButton(props){
    return (
        <ButtonLink {...props}></ButtonLink>
    )
}

Header.Logo = function HeaderLogo(props){
    const { to } = props;

    return (
        <ReactRouterLink to={to}>
            <Logo {...props} />
        </ReactRouterLink>
    );
};

export default Header
