import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { mediaQueries } from "../../../styles/responsive";
import { fonts, fontWeight, fontSize, colors } from "../../../styles/theme";

const bounce = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5);
  }
  50% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(-5);
  }
  100% {
    transform: translateX(0);
  }
`;

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

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
`;

export const Section3 = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: space-between;
  & div {
    width: 50%;
    padding: 15px;
  }
  & video {
    width: 50%;
  }
  ${mediaQueries.md} {
    flex-direction: column;
    & div {
      width: 100%;
    }
    & video {
      width: 100%;
    }
  }
`;

export const Section4 = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: space-between;
  & div {
    width: 50%;
    padding: 15px;
  }
  & video {
    width: 50%;
  }
  ${mediaQueries.md} {
    flex-direction: column;
    & div {
      width: 100%;
    }
    & video {
      width: 100%;
    }
  }
`;

export const BgSection = styled.aside`
  background-color: ${(props) => props.bgColor};
  padding: 25px 0;
`;

export const Subtitle = styled.h2`
  font-size: ${fontSize.xLarge};
  font-family: ${fonts.poppins};
  font-weight: ${fontWeight.regular};
  margin-bottom: 20px;
  text-align: center;
  line-height: 33px;
  color: ${(props) => props.color};
  ${mediaQueries.md} {
    font-size: ${fontSize.xLarge};
  }
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
  font-size: ${fontSize.large};
  line-height: 33px;
  font-style: normal;
  text-align: ${(props) => props.align};
  ${mediaQueries.md} {
    font-size: ${fontSize.medium};
  }
`;

export const LinkRouter = styled(Link)`
  font-family: ${fonts.notoSans};
  font-style: normal;
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.large};
  line-height: 33px;

  color: ${colors.black};
  display: flex;
  align-items: center;

  & svg {
    margin-left: 10px;
    animation: ${bounce} 2s ease-in-out infinite;
  }
  &:hover {
    color: #808080;
  }
`;

export const ContainerBtns = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  flex-direction: row;
  ${mediaQueries.md} {
    flex-direction: column;
  }
`;

export const BtnW = styled(Link)`
  text-align: center;
  background-color: white;
  color: ${colors.dark_blue};
  padding: 20px;
  text-decoration: none;
  border-radius: 5px;
  width: 50%;
  ${mediaQueries.md} {
    width: 100%;
  }
`;

export const BtnT = styled(Link)`
  text-align: center;
  border: 1px solid white;
  color: white;
  padding: 20px;
  text-decoration: none;
  border-radius: 5px;
  width: 50%;
  ${mediaQueries.md} {
    width: 100%;
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
