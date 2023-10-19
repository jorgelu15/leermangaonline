
import { useState } from "react"

import React, { useRef } from 'react';

import Jujutsu from "../../img/jujutsu.png"

import slider1 from "../../img/slider1.jpg"
import slider2 from "../../img/slider2.jpg"
import slider3 from "../../img/slider3.jpg"

const Slider = (props) => {

    const [ isDrag, setIsDrag ] = useState(false)
    const [ prPageX, setPrPageX ] = useState(0)
    const [ prScroll, setPrScroll ] = useState(0)

    const carouselRef = useRef(null);


    const handleMouseD = (e) => {
        setIsDrag(true)
        setPrPageX(e.pageX || e.touches[0].pageX)
        setPrScroll(carouselRef.current.scrollLeft)
    }

    const handleMouseM = (e) => {
        if (isDrag) {
            if (carouselRef.current) {
                let positionDif = (e.pageX || e.touches[0].pageX) - prPageX;
                carouselRef.current.scrollLeft = prScroll - positionDif;
            }
        }
        e.preventDefault();
    }

    const handleMouseU = (e) => {
        setIsDrag(false)
    }

    return (
        <div className="wrapper">
            <div className="carousel" 
                onMouseDown={handleMouseD}
                onMouseMove={handleMouseM}
                onMouseUp={handleMouseU}
                onTouchStart={handleMouseD}
                onTouchMove={handleMouseM}
                onTouchEnd={handleMouseU}
                ref={carouselRef}
                >
                <img src={slider2}/>
                <img src={slider1}/>
                <img src={slider3}/>
                <img src={slider2}/>
                <img src={slider1}/>
            </div>
        </div>
    )
}

export default Slider;