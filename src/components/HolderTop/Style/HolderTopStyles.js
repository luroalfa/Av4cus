import styled from "styled-components";
import { colors, fontWeight, fontSize } from "../../../styles/theme";
import  {mediaQueries} from "../../../styles/responsive"
import { Link } from "react-router-dom";


export const ContainerHolderTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.dark_blue};
  color: ${colors.white};
  height: 30px;
  padding: 5px;
  ${mediaQueries.md} {
    display: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 10px;
  }
  ${mediaQueries.lg} {
    flex-direction: column;
    & p{
      text-align: center;
      font-size: ${fontSize.extraSmall};
    }
    & > svg {
      margin-right: 0;
      margin-bottom: 5px;
    }
    & span{
      display: block;
    }
    & ul{
      margin-top: 5px;
    }
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
  display: inline-block;
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
  ${mediaQueries.lg}{
    font-size: ${fontSize.extraSmall};
  }
`;
