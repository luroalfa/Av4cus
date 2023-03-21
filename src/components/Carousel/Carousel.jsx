import React, { useState } from "react";
import {
  CarouselButtonLeft,
  CarouselButtonRight,
  CarouselContainer,
  CarouselInformation,
  CarouselSlide,
  Title,
} from "./Style/CarouselStyleElements";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <CarouselSlide
          key={index}
          backgroundImage={slide.image}
          style={{
            display: index === currentIndex ? "block" : "none",
          }}
        >
          <CarouselInformation>
            <Title>{slide.title}</Title>
            <p>{slide.description}</p>
          </CarouselInformation>
        </CarouselSlide>
      ))}
      <CarouselButtonRight onClick={handleNextClick} />
      <CarouselButtonLeft onClick={handlePrevClick} />
    </CarouselContainer>
  );
};

export default Carousel;
