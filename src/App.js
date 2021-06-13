import React from 'react';
import { FagContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

function App() {
  return (
    <>
      <JumbotronContainer />
      <FagContainer />
      <FooterContainer />
    </>
    
  );
}

export default App;
