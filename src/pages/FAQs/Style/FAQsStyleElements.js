import styled from "styled-components";
import BackgroundImage from "../../../assets/images/Faqs/Abovethefold.jpg";
import { fonts, fontWeight, fontSize, colors } from "../../../styles/theme";
import { mediaQueries } from "../../../styles/responsive";
import { BsPatchQuestion } from "react-icons/bs";
import { Collapse } from "antd";

const { Panel } = Collapse;

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
  text-align: center;
  & p {
    color: white;
    text-align: center;
    font-size: 1.2em;
  }
  & h1{
    ::before {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      width: 68%;
      height: 3px;
      background-color: ${colors.orange};
      box-shadow: 0px 4px 4px rgba(255, 159, 28, 0.5);
    }
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
`;

export const Text = styled.p`
  margin-left: 25px;
`;

export const Video = styled.video`
  width: 100%;
`;

export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    text-align: center;
    padding: 25px;
    color: white;
    font-size: 1.4em;
  }
  ${mediaQueries.md} {
    & p {
      font-size: 1.1em;
    }
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

export const QuestionIcon = styled(BsPatchQuestion)`
  color: white;
  font-size: 4em;
`;

export const PanelStyle = styled(Panel)`
  margin: 20px;
  font-size: 1.3em;
  ${mediaQueries.md}{
    font-size: 1.1em;
  }
`;
