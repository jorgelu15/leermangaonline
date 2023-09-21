
import { useState } from "react"
import React, { useRef } from 'react';

import paginamg from '../../img/paginamg.png'

const ContainerVermanga = (props) => {

    return (
        <div>
            <div className="manga-view">
                <img src={paginamg} alt="" />
            </div>
        </div>
    )
}

export default ContainerVermanga;