import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import "../Styling/Slider.css";

// Import images using ES6 imports
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
const slides = [slide1, slide2];

const SliderComp = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 1000 },
  });

  return (
    <div className="slider">
      {transitions((style, i) => (
        <animated.div key={i} style={style} className="slide">
          <img src={slides[i]} alt={`Slide ${i + 1}`} className="blurred-image"/>
        </animated.div>
      ))}
    </div>
  );
};

export default SliderComp;
