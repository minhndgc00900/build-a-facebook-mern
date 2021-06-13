import React from 'react'
import { FagContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';
import { OptForm } from '../components';

function Home() {
    return (
        <>
            <HeaderContainer>
                {/* <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                </Feature> */}
                <OptForm>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart
                        your membership.
                    </OptForm.Text>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FagContainer />
            <FooterContainer />  
        </>

    )
}

export default Home;