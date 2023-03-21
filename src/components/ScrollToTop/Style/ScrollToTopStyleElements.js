import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5);
  }
  50% {
    transform: translateY(-10px);
  }
  75% {
    transform: translateY(-5);
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
  z-index: 1;
  animation: ${bounce} 2s ease-in-out infinite;
`;