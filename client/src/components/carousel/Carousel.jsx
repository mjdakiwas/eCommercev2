import React, { useState } from 'react';
import {
    IoArrowBackCircleSharp,
    IoArrowForwardCircleSharp,
} from 'react-icons/io5';
import '../../styles/carousel.css';
import Slide from './Slide.jsx';
import Dot from './Dot.jsx';

export default function Carousel({ images }) {
    const [isCurrentSlide, setCurrentSlide] = useState(images[0]);
    const goPrevSlide = () => {
        setCurrentSlide(images[isCurrentSlide] - 1);
    };
    const goNextSlide = () => {
        setCurrentSlide(images[isCurrentSlide] + 1);
    };
    const handleDotClicked = (idx) => {
        setCurrentSlide(images[idx]);
    };

    return (
        <div className="carousel">
            <button className="carousel__leftBtn" onClick={goPrevSlide}>
                <IoArrowBackCircleSharp />
            </button>
            <button className="carousel__rightBtn" onClick={goNextSlide}>
                <IoArrowForwardCircleSharp />
            </button>
            <div className="carousel__slides">
                {Object.entries(images).map(([key, image]) => (
                    <Slide key={key} path={image.name} />
                ))}
            </div>
            <div className="carousel__indicators">
                {Object.entries(images).map((key) => (
                    <Dot key={key} onClick={handleDotClicked} />
                ))}
            </div>
        </div>
    );
}
