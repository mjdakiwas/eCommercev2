import React, { useState } from "react";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import "../../styles/carousel.css";
import Dot from "./Dot.jsx";

export default function Carousel({ images }) {
  const [isCurrentSlide, setCurrentSlide] = useState(images[0]);
  const goPrevSlide = () => {
    setCurrentSlide(images[isCurrentSlide] - 1);
  };
  const goNextSlide = () => {
    setCurrentSlide(images[isCurrentSlide] + 1);
  };
  // const handleDotClicked = () => {
  //     setCurrentSlide(images[]);
  // };

  return (
    <div className="carousel">
      <button className="carousel__leftBtn" onClick={goPrevSlide}>
        <IoArrowBackCircleSharp />
      </button>
      <button className="carousel__rightBtn" onClick={goNextSlide}>
        <IoArrowForwardCircleSharp />
      </button>
      <div className="carousel__slides">
        {Object.entries(images).map(([key, path]) => {
          // console.log(key, path);
          return (
            <div
              key={key}
              className={
                isCurrentSlide === key
                  ? "carousel__slide current"
                  : "carousel__slide"
              }
            >
              <img src={path} />
            </div>
          );
        })}
      </div>
      {/* <div className="carousel__indicators">
                {Object.keys(images).map((key) => (
                    <Dot onClick={handleDotClicked} />
                ))}
            </div> */}
    </div>
  );
}
