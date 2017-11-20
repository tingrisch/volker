import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 782px;
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.25);
  float: right;
`;

const Home = () => {
  return <div>Home</div>;
};

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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ueber-mich/" component={About} />
        <Route path="/kontakt/" component={Contact} />
      </Switch>
    </Wrapper>
  );
};

export default Main;
