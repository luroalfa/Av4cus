import styled from "styled-components";
import { mediaQueries } from "../../../styles/responsive";
import { fonts, fontWeight, fontSize, colors } from "../../../styles/theme";

export const StyledText = styled.p`
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.large};
  line-height: 33px;
  font-style: normal;
  text-align: justify;
  ${mediaQueries.md} {
    font-size: ${fontSize.medium};
  }
`;
