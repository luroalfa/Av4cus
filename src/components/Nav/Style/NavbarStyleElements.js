import styled from "styled-components";
import { colors, fonts, fontWeight } from "../../../styles/theme";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.white};
  height: 100px;
  border: 1px solid blue;
`;
export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 64px;
  font-weight: ${fontWeight.medium};
  font-family: ${fonts.notoSans};
  color: ${colors.black};
  text-decoration: none;
  text-transform: uppercase;
`;

export const Logotype = styled.img`
  width: 64px;
  height: 64px;
`;

export const IconNav = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 5px 0 0;
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

export const LinkRouter = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${colors.dark_blue};
  text-decoration: none;
  background-color: ${(props) => ((props.active) ? colors.orange : colors.white)};
  border-radius: 10px;
  padding: 5px;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.black};
    transition: width 0.3s ease-out;
  }
  &:hover {
    ${(props) =>
      props.active ? "transform: scale(.9);" : "transform: scale(1.2);"}
    &:after {
      ${(props) => (props.active ? "" : "width: 100%;")}
    }
  }
`;
