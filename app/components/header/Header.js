import React from 'react';
import styled from 'styled-components';

import PageLogo from './PageLogo';

const Wrapper = styled.div`
  background: #cafbed;
  width: 100%;
  display: flex;
`;

const Placeholder = styled.div`
  width: 178px;
  background-color: transparent;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 762px;
  padding: 10px;
  background: linear-gradient(to right, rgba(255,218,186,0.8) 0%,rgba(255,159,76,0.9) 65%,rgba(255,218,186,0.95) 100%);
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.45);
`;

const PageClaim = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 20px;
  margin-top: 34px;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: #222;
  border-radius: 50%;
  margin: 9px;
`;

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Placeholder />
        <StyledHeader>
          <PageLogo />
          <PageClaim>
            sehen <Dot /> verstehen <Dot /> annehmen
          </PageClaim>
        </StyledHeader>
      </Wrapper>
    </header>
  );
};

export default Header;
