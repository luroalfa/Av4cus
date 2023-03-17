import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fontSize, fontWeight } from "../../../styles/typography";
import { Link } from "react-router-dom";

export const ContainerHolderTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.dark_blue};
  color: ${colors.white};
  height: 30px;
  padding: 5px;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;  
  & > svg {
    margin-right: 10px;
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Anchor = styled.a`
  color: ${colors.white};
  text-decoration: none;
  &:hover {
    color: ${colors.orange};
  }
`;

export const LinkRouter = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  &:hover {
    color: ${colors.orange};
  }
`;


export const ListItem = styled.li`
  margin: 0 10px;
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.thin};
  color: ${colors.white};
  & > svg {
    margin-right: 5px;
  }
`;
