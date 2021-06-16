/* eslint-disable react/prop-types */
import React, {
  useContext,
  useState,
  createContext
} from 'react'
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body
} from '../accordion/style/accordion'

function Accordion (props) {
  const { children, ...restProps } = props

  return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
  )
}

Accordion.Title = function AccordionTitle (props) {
  const { children, ...restProps } = props
  return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame (props) {
  const { children, ...restProps } = props
  return <Frame {...restProps}>{children}</Frame>
}

const ToggleContext = createContext()

Accordion.Item = function AccordionItem (props) {
  const { children, ...restProps } = props

  const [toggleShow, setToggleShow] = useState(false)
  return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader (props) {
  const { children, ...restProps } = props
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return (
        <Header onClick={() => setToggleShow(prev => !prev)}
            {...restProps}
        >
                {children}
                {toggleShow
                  ? (
                    <img src="/images/icons/close-slim.png" alt="Clóe" />
                    )
                  : <img src='/images/icons/add.png' alt='Open' /> }
        </Header>
  )
}

Accordion.Body = function AccordionBody (props) {
  const { children } = props
  const { toggleShow } = useContext(ToggleContext)

  return toggleShow ? <Body {...props}>{children}</Body> : null
}

export default Accordion
