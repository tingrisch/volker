import React from 'react';
import styled from 'styled-components';

const MainNavigation = styled.nav``;

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const MenuElement = styled.li`
  display: block;
  list-style-type: none;
`;

const MenuLink = styled.a`
  display: flex;
  text-align: center;
  text-decoration: none;
  color: #777;
  padding: 1rem;

  &:hover {
    background: #777;
    color: #fff;
  }
`;

const MenuElementWithChildren = styled.li`
  
`;

// https://codepen.io/joslex/pen/adeJeV

const Navigation = () => {
  return (
    <div>
      <MainNavigation>
        <Menu>
          <MenuElement>
            <MenuLink>Über mich</MenuLink>
          </MenuElement>
          <MenuElementWithChildren>
            <MenuLink>Produkte</MenuLink>
          </MenuElementWithChildren>
          <MenuElement>
            <MenuLink>Cooles Zeug</MenuLink>
          </MenuElement>
        </Menu>
      </MainNavigation>
    </div>
  );
};

export default Navigation;
