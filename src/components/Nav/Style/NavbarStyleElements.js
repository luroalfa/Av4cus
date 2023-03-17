import styled from 'styled-components';
import {colors} from "../../../styles/colors"
import {fonts, fontWeight} from "../../../styles/typography"

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.white};
  height: 100px;
  border: 1px solid blue;
`;
export const LogoContainer = styled.div`
display: flex;
align-items: center;
`;

export const Logotype = styled.img``;

export const Logo = styled.a`
  font-size: 64px;
  font-weight: ${fontWeight.medium};
  font-family: ${fonts.notoSans};
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 10px;
`;

export const NavLink = styled.a`
  font-size: 1.2rem;
  color: #000000;
  text-decoration: none;
`;