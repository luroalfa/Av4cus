import styled, { keyframes }  from "styled-components";
import {mediaQueries} from "../../../styles/responsive"

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const WhatsappButton = styled.a`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  line-height: 63px;
  bottom: 25px;
  right: 25px;
  background: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size:  35px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  transition: all 300ms ease;
  animation: ${pulseAnimation} 1s ease-in-out infinite;

  &:hover {
    background: #20ba5a;
  }
  ${mediaQueries.md}{
      width: 55px;
      height: 55px;
      line-height: 66px;
  }
`;
