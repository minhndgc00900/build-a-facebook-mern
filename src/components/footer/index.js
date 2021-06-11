import React from 'react';
import {
    Row,
    Column,
    Link,
    Title,
    Text,
    Break,
    Container
} from './styles/footer';

function Footer(props) {
    const { children, ...restProps } = props;
    return (
        <Container {...restProps}>
            {children}
        </Container>
)}

Footer.Row = function FooterRow(props) {
    const { children, ...restProps } = props;

    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn(props) {
    const { children, ...restProps } = props;

    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink(props) {
    const { children, ...restProps } = props;

    return <Link {...restProps}>{children}</Link>
}

Footer.Text = function FooterText(props) {
    const { children, ...restProps } = props;

    return <Text {...restProps}>{children}</Text>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };

Footer.Break = function FooterBreak(props) {
    const { children, ...restProps } = props;

    return <Break {...restProps}>{children}</Break>
}

export default Footer;
