import React, { useState, useEffect } from "react";
import {
  Container,
  Slide,
  Wrapper,
  ImageSlider,
} from "./Style/CarouselImageStyleElements";

const CarouselImages = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  return (
    <Container>
      <Wrapper style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <ImageSlider src={slide} alt={`Slide ${index}`} />
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default CarouselImages;
