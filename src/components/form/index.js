import React from 'react'
import { 
    Base, 
    Container, 
    Error, 
    Input, 
    Link, 
    Submit, 
    Text, 
    TextSmall, 
    Title 
} from './styles/form';

function Form(props) {
    return (
        <Container {...props}>
        </Container>
    )
}

export default Form;

Form.Error = function FormError(props){
    return <Error {...props}></Error>
}

Form.Base = function FormBase(props){
    return <Base {...props}></Base>
}

Form.Title = function FormTitle(props){
    return <Title {...props}></Title>
}

Form.Text = function FormText(props){
    return <Text {...props}></Text>
}

Form.TextSmall = function FormTextSmall(props){
    return <TextSmall {...props}></TextSmall>
}

Form.Link = function FormLink(props){
    return <Link {...props}></Link>
}

Form.Input = function FormInput(props){
    return <Input {...props}></Input>
}

Form.Submit = function FormSubmit(props){
    return <Submit {...props}></Submit>
}
