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
`;

const MenuLink = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #ffffff;
  padding: 1rem;
  white-space: nowrap;

  &:hover {
    background-color:rgba(203, 98, 6, 0.9);
    color: #fff;
  }
`;

const MenuItemHasChildren = styled.li`
  list-style-type: none;
  border-bottom: 1px solid #CB6206;
  max-height: 50px;
  background: green;

  &:hover > ul {
    background: red;
    display: block;
    color: #fff;
  }

  &:hover {
    display: flex;
    justify-content: space-between;
    background-color: rgba(203, 98, 6, 0.9);
  }

  &:hover a div {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
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

const SubMenu = styled.ul`
  display: none;
  background-color:rgba(203, 98, 6, 0.9);
`;

const SvgWrapper = styled.div`
  width: 16px;
  height: 16px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
`;

// https://codepen.io/joslex/pen/adeJeV

const Navigation = () => {
  return (
    <div>
      <MainNavigation>
        <Menu>
          <MenuElement>
            <MenuLink>&Uuml;ber mich</MenuLink>
          </MenuElement>
          <MenuItemHasChildren>
            <MenuLink>
              Angebote
              <SvgWrapper>
                <ExpandSvg fill="#ffffff" />
              </SvgWrapper>
            </MenuLink>
            <SubMenu>
              <SubMenuElement>
                <MenuLink>Vortr&auml;ge und Beratungen</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Zeichnen und Interpretation Ihres individuellen Seelenbaums</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Gesch&uuml;tzte Kontakte zu Verstorbenen</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Mediale R&uuml;ckf&uuml;hrungen und Aufstellungen</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Kostenloser Anrufservice für die Schweiz</MenuLink>
              </SubMenuElement>
            </SubMenu>
          </MenuItemHasChildren>
          <MenuItemHasChildren>
            <MenuLink>
              Ver&ouml;ffentlichungen
              <SvgWrapper>
                <ExpandSvg fill="#ffffff" />
              </SvgWrapper>
            </MenuLink>
            <SubMenu>
              <SubMenuElement>
                <MenuLink>Isabella's Gotteskinder der Natur</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Wenn Schmetterlinge tanzen gehen</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Du glaubst zu wissen</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Thao - Der weiße Adler</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Der Seelenbaum</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Audio-CD: Wege zu dir selbst</MenuLink>
              </SubMenuElement>
            </SubMenu>
          </MenuItemHasChildren>
        </Menu>
      </MainNavigation>
    </div>
  );
};

export default Navigation;
