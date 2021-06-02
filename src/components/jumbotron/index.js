import React from 'react'
import {
    Container,
    Item,
    Inner,
    Pane,
    Title,
    SubTitle,
    Image
} from './styles/jumbotron'

function Jumbotron(props) {
    const { children, direction = 'row', ...restProps } = props;

    return (
        <Item direction={direction} {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer(props) {
    const { children, ...restProps } = props;

    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane(props) {
    const { children, ...restProps } = props;

    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle(props) {
    const { children, ...restProps } = props;

    return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle(props) {
    const { children, ...restProps } = props;

    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage(props) {
    const { children, ...restProps } = props;

    return <Image {...restProps}>{children}</Image>
}

export default Jumbotron;
