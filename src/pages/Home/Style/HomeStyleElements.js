import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { mediaQueries } from "../../../styles/responsive";
import { fonts, fontWeight, fontSize, colors } from "../../../styles/theme";

export const Section1 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > div {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    &:first-of-type {
      padding: 0 25px 0 0;
    }
    & div {
      display: block;
      width: 100%;
      text-align: left;
    }
  }
  ${mediaQueries.md} {
    flex-direction: column;
    flex-direction: column-reverse;
    & > div {
      align-items: center;
      text-align: justify;
    }
  }
`;

export const BgSection = styled.div`
  background-color: ${colors.dark_gray};
  padding: 25px 0;
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
`;
export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const Text = styled.p`
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.Large};
  line-height: 33px;
  font-style: normal;
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-family: ${fonts.poppins};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.xLarge};
  line-height: 54px;
  font-style: normal;
`;

export const Paragraph = styled.p`
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.Large};
  line-height: 33px;
  font-style: normal;
  text-align: justify;
`;

export const LinkRouter = styled(Link)`
  font-family: ${fonts.notoSans};
  font-style: normal;
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.Large};
  line-height: 33px;
  color: #808080;
  display: flex;
  align-items: center;
  &:hover {
    color: ${colors.black};
  }
`;

export const ImageAboutUs = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 86px;
  object-fit: cover;
  filter: drop-shadow(10px 18px 10px rgba(0, 0, 0, 0.41));
  ${mediaQueries.md} {
    border-radius: 50px;
    margin-bottom: 30px;
  }
`;
