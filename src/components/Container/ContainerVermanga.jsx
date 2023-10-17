
import { useState } from "react"
import React, { useRef } from 'react';

import pagina1 from '../../img/pagina1.png'
import pagina2 from '../../img/pagina2.png'
import pagina3 from '../../img/pagina3.png'

const ContainerVermanga = (props) => {

    return (
        <div>
            <div className="manga-view">
                <img src={pagina1}/>
                <img src={pagina2}/>
                <img src={pagina3}/>
            </div>
        </div>
    )
}

export default ContainerVermanga;