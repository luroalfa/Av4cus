import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  margin-top: 50px;
`;

export const Slide = styled.div`
  flex: 0 0 33.33%;
  padding: 0 20px;
`;

export const ImageSlider = styled.img`
  width: 100%;
  height: 60px;
  filter: grayscale(100%);
  object-fit: scale-down;.
`;
