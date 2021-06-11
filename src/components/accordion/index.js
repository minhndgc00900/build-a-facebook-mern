import React from 'react';
import { Container, Inner } from '../jumbotron/styles/jumbotron';

function Accordion(props) {
    const { children, ...restProps } = props;

    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle(props) {
    const { children, ...restProps } = props;
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame(props) {
    const { children, ...restProps } = props;
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem(props) {
    const { children, ...restProps } = props;

    const [toogleShow, setToogleShow] = useState(false);
    return <Item {...restProps}>{children}</Item>
}

// Accordion.Header = function AccordionHeader(props) {
//     const { children, ...restProps } = props;

//     const [toogleShow, setToogleShow] = useState(false);
//     return (
//         <Header onClick={() => setT} {...restProps}>
//             {children}
//         </Header>
//     )
// }

export default Accordion