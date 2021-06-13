import React from 'react';
import { 
    Container, 
    Input,
    Button,
    Text,
    Break
} from '../../components/opt-form/styles/opt-form';

export default function OptForm(props){
    return <Container {...props}></Container>
}

OptForm.Input = function OptFormInput(props){
    return <Input {...props} />;
}

OptForm.Button = function OptFormButton(props){
    return (
        <Button {...props}>
            <img src='/images/icons/chevron-right.png' alt='Try Now' />
        </Button>
    )
}

OptForm.Text = function OptFormText(props){
    return (
        <Text {...props}>
        </Text>
    )
}

OptForm.Break = function OptFormBreak(props){
    return (
        <Break {...props}>
        </Break>
    )
}