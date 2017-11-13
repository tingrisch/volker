import React from 'react';
import styled from 'styled-components';
import ExpandSvg from 'genericons-neue-react/icons/expand';

const MainNavigation = styled.nav`
  background-color: rgba(233, 128, 37, 0.3);
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const MenuElement = styled.li`
  display: block;
  list-style-type: none;
  border-bottom: 1px solid #CB6206;

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
  color: #ffffff;
  padding: 1rem;
  white-space: nowrap;

  &:hover {
    background-color:rgba(203, 98, 6, 0.9);
    color: #fff;
  }
`;

const SubMenu = styled.ul`
  display: none;
  background-color:rgba(203, 98, 6, 0.9);
`;

const MenuItemHasChildren = styled.li`
  list-style-type: none;
  border-bottom: 1px solid #CB6206;
  max-height: 50px;

  &:hover > ul {
    display: block;
    color: #fff;
    padding-left: 5rem;
  }

  &:hover {
    display: flex;
    background-color: rgba(203, 98, 6, 0.9);
  }
`;

const SubMenuElement = styled.li`
  list-style-type: none;
  background-color:rgba(203, 98, 6, 0.9);

  &:hover, & a:hover{
    background-color: #ffffff;
    color: rgba(203, 98, 6, 1);
  }
`;

// https://codepen.io/joslex/pen/adeJeV

const Navigation = () => {
  return (
    <div>
      <div>
        <ExpandSvg fill="#ffffff" />
      </div>
      <MainNavigation>
        <Menu>
          <MenuElement>
            <MenuLink>Über mich</MenuLink>
          </MenuElement>
          <MenuItemHasChildren>
            <MenuLink>Produkte</MenuLink>
            <SubMenu>
              <SubMenuElement>
                <MenuLink>Produkt 1</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Produkt 2</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Produkt 3</MenuLink>
              </SubMenuElement>
            </SubMenu>
          </MenuItemHasChildren>
          <MenuElement>
            <MenuLink>Cooles Zeug</MenuLink>
          </MenuElement>
        </Menu>
      </MainNavigation>
    </div>
  );
};

export default Navigation;
