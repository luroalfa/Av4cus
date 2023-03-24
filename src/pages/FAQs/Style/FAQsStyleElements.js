import styled from "styled-components";
import BackgroundImage from "../../../assets/images/Faqs/Abovethefold.jpg";
import { fonts, fontWeight, fontSize, colors } from "../../../styles/theme";
import { mediaQueries } from "../../../styles/responsive";

export const SliderContainer = styled.div`
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
  background: linear-gradient(
      rgba(0, 3, 31, 0) 0%,
      rgba(0, 3, 31, 0.5) 20%,
      rgba(0, 3, 31, 1) 100%
    ),
    url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    ${mediaQueries.md} {
        background-position: left;
        background: linear-gradient(
            rgba(0, 3, 31, 0) 0%,
            rgba(0, 3, 31, 0.5) 40%,
            rgba(0, 3, 31, 1) 100%
          ),
          url(${BackgroundImage});
  }
`;

export const ContenedorTitle = styled.div`
position: absolute;
right: 10%;
& p{
  color: white;
  text-align: center;
}
${mediaQueries.md} {
    right: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-family: ${fonts.poppins};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.xLarge};
  line-height: 54px;
  font-style: normal;
`;

export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    text-align: center;
    padding: 25px;
    color: white;
  }
`;
export const Section2 = styled.section`
  display: flex;
  align-items: center;
`;

export const BgSection = styled.div`
  background-color: ${colors.dark_blue};
  padding: 25px 0;
`;
export const BgSection2 = styled.div`
  height: 50vh;
  background: linear-gradient(
    to bottom,
    black 0%,
    black 50%,
    white 50%,
    white 100%
  );
  padding: 25px 0;
`;
