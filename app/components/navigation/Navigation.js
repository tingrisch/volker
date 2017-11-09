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

  &:hover > ul {
    display: block;
    color: #fff;
    padding-left: 2rem;
  }

  @media (min-width: 800px) {
    &:hover > ul {
      padding-left: 0;
      background: #777;
    }

    &:hover > ul a {
      color: #fff;
    }
  }
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

const MenuElementSub = styled.li`
  a:after {
    font-family: 'Genericons';
    content: '\f431';
    padding: 1px;
  }
`;

const MenuSub = styled.ul`
  display: none;

  @media (min-width: 800px) {
    nav ul ul {
      display: none;
      position: absolute;
    }
  }
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
          <MenuElement>
            <MenuLink>Produkte</MenuLink>
          </MenuElement>
          <MenuElement>
            <MenuLink>Cooles Zeug</MenuLink>
          </MenuElement>
        </Menu>
      </MainNavigation>
    </div>
  );
};

export default Navigation;
