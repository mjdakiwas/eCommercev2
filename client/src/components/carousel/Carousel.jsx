import { useState, useEffect } from 'react';
import {
    IoArrowBackCircleSharp,
    IoArrowForwardCircleSharp,
} from 'react-icons/io5';
import '../../styles/carousel.css';
import Slide from './Slide.jsx';
import Dot from './Dot.jsx';

export default function Carousel() {
    const mobileheroImgsObj = import.meta.glob(
        '/src/assets/images/hero/desktop/*.{png,jpg,jpeg,PNG,JPEG}',
        { eager: true, import: 'default' }
    );

    const heroImgsObj = import.meta.glob(
        '/src/assets/images/hero/*.{png,jpg,jpeg,PNG,JPEG}',
        { eager: true, import: 'default' }
    );
    const [viewport, setViewport] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setViewport(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let imgs;
    if (viewport < 768) {
        imgs = Object.values(heroImgsObj);
    } else {
        imgs = Object.values(mobileheroImgsObj);
    }

    console.log(imgs);

    const [currentSlide, setCurrentSlide] = useState(0);

    const goPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    };
    const goNextSlide = () => {
        setCurrentSlide((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel">
            <button className="carousel__leftBtn" onClick={goPrevSlide}>
                <IoArrowBackCircleSharp />
            </button>
            <button className="carousel__rightBtn" onClick={goNextSlide}>
                <IoArrowForwardCircleSharp />
            </button>
            <div
                className="carousel__slides"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {imgs.map((src, index) => (
                    <Slide
                        key={index}
                        index={index}
                        src={src}
                        isActive={currentSlide === index}
                    />
                ))}
            </div>
            <div className="carousel__indicators">
                {imgs.map((_, index) => (
                    <Dot
                        key={index}
                        index={index}
                        active={currentSlide === index}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
