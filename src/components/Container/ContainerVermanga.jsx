
import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';

import pagina1 from '../../img/pagina1.png'
import pagina2 from '../../img/pagina2.png'
import pagina3 from '../../img/pagina3.png'
import vermangaContext from "../../context/vermanga/vermangaContext";
import { useSeries } from "../../hooks/useSeries";

const ContainerVermanga = (props) => {

    const { id_grupo, serie_uid, numCap, paginas } = useContext(vermangaContext);

    const { postVisualizacion } = useSeries();

    useEffect(() => {
        postVisualizacion(serie_uid);
    }, []);

    return (
        <div>
            <div className="manga-view">
                {paginas?.map((capitulo, indx) => <img src={`http://upload.leermangaonline.com/uploads/capitulos/${id_grupo + '_' + serie_uid + '_' + numCap + '/' + capitulo?.url}`} alt="capitulo" key={indx} />)}
                {/* <img src={pagina1}/>
                <img src={pagina2}/>
                <img src={pagina3}/> */}
            </div>
        </div>
    )
}

export default ContainerVermanga;