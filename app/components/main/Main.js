import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 782px;
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.25);
  float: right;
`;

const About = () => {
  return <div>Über mich</div>;
};

const Contact = () => {
  return <div>Kontakt</div>;
};

const Main = () => {
  return (
    <Wrapper>
      Test dskfj sdjfskdl jflsdf
      <Route path="/ueber-mich/" component={About} />
      <Route path="/kontakt/" component={Contact} />
    </Wrapper>
  );
};

export default Main;
