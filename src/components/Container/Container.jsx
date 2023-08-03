
import { useState } from "react"
import Jujutsu from "../../img/jujutsu.png"
import React, { useRef } from 'react';
import Slider from "./Slider";

const Container = (props) => {

    return (
        <div>
            <Slider></Slider>
            <main>
                <h2>Contenido</h2>
            </main>
        </div>
    )
}

export default Container;