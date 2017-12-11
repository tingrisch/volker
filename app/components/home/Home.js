import React from 'react';
import styled from 'styled-components';

import H1 from '../ui/headline/H1';
import homeImage from './ruhe_frieden.jpg';

const HomeImageWrapper = styled.div`
  width: 330px;
  height: 330px;
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 200px;
  box-shadow: 0px 1px 9px 0px ${props => props.theme.images.boxShadow};
`;

const HomeImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Home = () => {
  return (
    <div>
      <H1>Willkommen auf meinen Seiten</H1>
      <HomeImageWrapper>
        <HomeImage src={homeImage} />
      </HomeImageWrapper>
    </div>
  );
};

export default Home;
