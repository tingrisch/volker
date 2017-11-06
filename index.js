import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Header from './app/components/header/Header';
//import Sidebar from './app/components/sidebar/Sidebar';
//import Main from './app/components/main/Main';

const Wrapper = styled.div`
  background: #fdf1c1;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
