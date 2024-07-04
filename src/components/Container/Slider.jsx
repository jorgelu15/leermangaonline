import React, { useEffect, useRef, useState } from 'react';

import slider1 from "../../assets/slide.jpg";
import slider2 from "../../assets/slide.jpg";
import slider3 from "../../assets/slide.jpg";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const intervalRef = useRef(null);
    const slides = [slider1, slider2, slider3, slider1, slider2, slider3];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1023) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 1599) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % slides.length);
        }, 5000);

        return () => {
            clearInterval(intervalRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [slides.length, slidesToShow]);

    const getActiveIndex = () => {
        return Math.floor(currentIndex / slidesToShow) % Math.ceil(slides.length / slidesToShow);
    };

    return (
        <div className="wrapper">
            <div
                className="slider_inner"
                style={{
                    transform: `translateX(-${(currentIndex / slidesToShow) * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div className='slide' key={index}>
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className='controls'>
                <div className='inner_controls'>
                    {[...Array(Math.ceil(slides.length / slidesToShow))].map((_, index) => (
                        <button
                            key={index}
                            className={`pin-control ${index === getActiveIndex() ? 'active' : ''}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
