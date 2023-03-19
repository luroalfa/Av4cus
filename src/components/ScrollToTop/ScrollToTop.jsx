import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ScrollButton } from "./Style/ScrollToTopStyleElements";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton visible={visible} onClick={scrollToTop}>
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;
