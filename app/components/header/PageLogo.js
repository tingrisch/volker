import React from 'react';
import styled from 'styled-components';

import H1 from '../ui/headline/H1';
import Link from '../ui/link/Link';

const Logo = styled.div``;

const Claim = styled.span`
  font-size: 16px;
  font-style: italic;
`;

const StyledLink = styled(Link)`
  color: #222;
`;

const PageLogo = () => {
  return (
    <Logo>
      <H1>
        <StyledLink href="http://www.volker-pehl.de">
          Volker Pehl<br />
          <Claim>Autor &ndash; Psychologischer Berater &ndash; medial gef&uuml;hrt</Claim>
        </StyledLink>
      </H1>
    </Logo>
  );
};

export default PageLogo;
