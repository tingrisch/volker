import React from 'react';
import styled from 'styled-components';

import Navigation from '../navigation/Navigation';

const Wrapper = styled.div`
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.45);
  background: linear-gradient(
    to bottom,
    rgba(255, 218, 186, 0.8) 0%,
    rgba(255, 159, 76, 0.9) 65%,
    rgba(255, 218, 186, 0.95) 100%
  );
  width: 178px;
  height: 600px;
`;

const Sidebar = () => {
  return <Navigation />;
};

export default Sidebar;
