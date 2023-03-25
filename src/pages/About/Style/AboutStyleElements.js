import styled from "styled-components";
import BackgroundImage from "../../../assets/images/about/teamworking.jpg";
import { mediaQueries } from "../../../styles/responsive";
import { fonts, fontWeight, fontSize, colors } from "../../../styles/theme";


export const SliderContainer = styled.figure`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
`;

export const Slider = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    ${mediaQueries.md} {
      background-position: right;
  }
`;

export const ContenedorTitle = styled.div`
  position: absolute;
  right: 10%;
  text-align: center;
  & p {
    color: white;
    text-align: center;
    font-size: 1.2em;
  }
  ${mediaQueries.md} {
    right: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.h1`
  position: relative;
  color: white;
  text-align: center;
  font-family: ${fonts.poppins};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.xLarge};
  line-height: 54px;
  font-style: normal;

  ::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 3px;
    background-color: ${colors.orange};
    box-shadow: 0px 4px 4px rgba(255, 159, 28, 0.5);
  }
  ${mediaQueries.md}{
    ::before {
      width: 100%;
    }    
  }
`;