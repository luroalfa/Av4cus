// Library
import styled from "styled-components";
// Icons
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
// Theme
import { colors, fontSize } from "../../../styles/theme";
import { Link } from "react-router-dom";

export const Title = styled.p`
  font-size: ${fontSize.large};
`;

export const CTA = styled(Link)`
  width: 200px;
  height: 50px;
  background: ${colors.orange};
  padding: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const CarouselContainer = styled.figure`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
`;

export const CarouselSlide = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const CarouselInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em
`;

export const CarouselButtonRight = styled(BsFillArrowRightCircleFill)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  right: 25px;
  opacity: 0.09;
`;

export const CarouselButtonLeft = styled(BsFillArrowLeftCircleFill)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  left: 25px;
  opacity: 0.09;
`;
