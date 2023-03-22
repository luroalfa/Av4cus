import styled from "styled-components";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { fontSize } from "../../../styles/theme";

export const Title = styled.p`
  font-size: ${fontSize.xxLarge};
`;

export const CarouselContainer = styled.div`
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
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
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
  opacity: .09;
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
  opacity: .09;
`;
