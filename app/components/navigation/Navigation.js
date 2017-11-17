import React from 'react';
import styled from 'styled-components';
import ExpandSvg from 'genericons-neue-react/icons/expand';
import { Link, NavLink } from 'react-router-dom';

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
  border-bottom: 1px solid ${props => props.theme.menu.border};

  &:hover > ul {
    display: block;
    color: ${props => props.theme.white};
    padding-left: 2rem;
  }
`;

const MenuLink = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${props => props.theme.white};
  padding: 1rem 0.5rem 1rem 1rem;
  white-space: nowrap;

  &:hover {
    background-color: rgba(203, 98, 6, 0.9);
    color: ${props => props.theme.white};
    transition: background 0.3s ease-out; /* explorer 10 */
    -webkit-transition: background 0.3s ease-out; /* chrome & safari */
    -moz-transition: background 0.3 ease-out; /* firefox */
    -o-transition: background 0.3 ease-out; /* opera */
  }
`;

const MenuItemHasChildren = styled.li`
  list-style-type: none;
  border-bottom: 1px solid ${props => props.theme.menu.border};
  max-height: 50px;

  &:hover > ul {
    color: ${props => props.theme.white};
    display: inline-block;
    margin-left: 138px;
    margin-top: -51px;
    background: transparent;
  }

  &:hover {
    background-color: rgba(203, 98, 6, 0.9);
    transition: background 0.3s ease-out; /* explorer 10 */
    -webkit-transition: background 0.3s ease-out; /* chrome & safari */
    -moz-transition: background 0.3 ease-out; /* firefox */
    -o-transition: background 0.3 ease-out; /* opera */
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
  background-color: rgba(203, 98, 6, 0.9);
  border: 1px solid ${props => props.theme.menu.border};

  &:hover,
  & a:hover {
    background-color: ${props => props.theme.white};
    color: rgba(203, 98, 6, 1);
    transition: background 0.3s ease-out; /* explorer 10 */
    -webkit-transition: background 0.3s ease-out; /* chrome & safari */
    -moz-transition: background 0.3 ease-out; /* firefox */
    -o-transition: background 0.3 ease-out; /* opera */
  }
`;

const SubMenu = styled.ul`
  display: none;
  background-color: rgba(203, 98, 6, 0.9);
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
            <MenuLink>dsfsdf</MenuLink>
            <NavLink to="/about/">&Uuml;ber mich</NavLink>
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
                <MenuLink>
                  Zeichnen und Interpretation Ihres individuellen Seelenbaums
                </MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>Gesch&uuml;tzte Kontakte zu Verstorbenen</MenuLink>
              </SubMenuElement>
              <SubMenuElement>
                <MenuLink>
                  Mediale R&uuml;ckf&uuml;hrungen und Aufstellungen
                </MenuLink>
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
          <MenuElement>
            <MenuLink>Kontakt</MenuLink>
          </MenuElement>
        </Menu>
      </MainNavigation>
    </div>
  );
};

export default Navigation;
