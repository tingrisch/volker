import React from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './app/components/header/Header';
import Sidebar from './app/components/sidebar/Sidebar';
import Main from './app/components/main/Main';
import Theme from './app/styles/Theme';

const Wrapper = styled.div`
  margin: 100px auto;
  width: 960px;
`;

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <Wrapper>
          <Header />
          <Sidebar />
          <Main />
        </Wrapper>
      </ThemeProvider>
    </Router>
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
