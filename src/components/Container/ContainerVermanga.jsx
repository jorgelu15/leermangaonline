
import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';

import pagina1 from '../../img/pagina1.png'
import pagina2 from '../../img/pagina2.png'
import pagina3 from '../../img/pagina3.png'
import vermangaContext from "../../context/vermanga/vermangaContext";
import { useSeries } from "../../hooks/useSeries";
import { useParams } from "react-router-dom";

const ContainerVermanga = (props) => {

    const {id_grupo, serie_uid, id_capitulo, num_cap} = useParams();

    const { paginas, getCapitulo } = useContext(vermangaContext);

    useEffect(() => {
        if(id_capitulo){
            getCapitulo(id_capitulo);
        }
      }, [id_capitulo]);

      console.log(num_cap)

    const { postVisualizacion } = useSeries();

    useEffect(() => {
        postVisualizacion(serie_uid);
    }, []);

    return (
        <div>
            <div className="manga-view">
                {paginas?.map((capitulo, indx) => <img src={`http://upload.leermangaonline.com/uploads/capitulos/${id_grupo + '_' + serie_uid + '_' + id_capitulo + '/' + capitulo?.url}`} alt="capitulo" key={indx} />)}
                {/* <img src={pagina1}/>
                <img src={pagina2}/>
                <img src={pagina3}/> */}
            </div>
        </div>
    )
}

export default ContainerVermanga;