import styled from "styled-components";
import { mediaQueries } from "../../../styles/responsive";
import { fonts, fontWeight, fontSize } from "../../../styles/theme";

export const StyledSmallText = styled.p`
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.small}; 
  line-height: 33px; 
  font-style: normal;
  text-align: justify;
  color: ${({ color }) => color || 'black'};

  ${mediaQueries.md} {
    font-size: ${fontSize.xSmall}; 
  }
`;
