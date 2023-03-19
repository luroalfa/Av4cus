import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: ${({ visible }) => (visible ? "block" : "none")};
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50px;
  z-index: 999;
  animation: ${bounce} 1s ease-in-out infinite;
`;