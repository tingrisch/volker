import React from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal } from 'styled-components';

import Header from './app/components/header/Header';
// import Sidebar from './app/components/sidebar/Sidebar';
// import Main from './app/components/main/Main';

const Wrapper = styled.div`
  background: #1b55de;
  margin: 100px auto;
  width: 960px;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );

};

// Global style
// eslint-disable-next-line
injectGlobal`
  body {
    font-family: sans-serif,Arial,Helvetica;
    color: #222;
  }
`;

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
