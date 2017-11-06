import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: red;
  width: 400px;
`;

const Header = () => {
  return <StyledHeader>Das ist mein Header</StyledHeader>;
};

export default Header;
