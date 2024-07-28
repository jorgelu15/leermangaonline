
import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';

import pagina1 from '../../img/pagina1.png'
import pagina2 from '../../img/pagina2.png'
import pagina3 from '../../img/pagina3.png'
import vermangaContext from "../../context/vermanga/vermangaContext";
import { useSeries } from "../../hooks/useSeries";
import { useParams } from "react-router-dom";

const ContainerVermanga = (props) => {

    const { paginacion } = props;

    const [paginaActual, setPaginaActual] = useState(0);

    const { id_grupo, serie_uid, id_capitulo, num_cap } = useParams();

    const { paginas, getCapitulo } = useContext(vermangaContext);

    const numeroPaginas = paginas?.length;

    const next = () => {
        if (paginaActual + 1 < numeroPaginas) {
            setPaginaActual(paginaActual + 1);
        }
    }

    const prev = () => {
        if (paginaActual - 1 >= 0) {
            setPaginaActual(paginaActual - 1);
        }
    }

    useEffect(() => {
        if (id_capitulo) {
            getCapitulo(id_capitulo);
        }
    }, [id_capitulo]);

    const { postVisualizacion } = useSeries();

    useEffect(() => {
        postVisualizacion(serie_uid);
    }, []);

    return (
        <div>
            <div className="manga-view">
                {
                    paginacion ?
                        paginas?.map((capitulo, indx) => <img src={`http://upload.leermangaonline.com/uploads/capitulos/${id_grupo + '_' + serie_uid + '_' + id_capitulo + '/' + capitulo?.url}`} alt="capitulo" key={indx} />)
                        :
                        paginas ?
                            <img src={`http://upload.leermangaonline.com/uploads/capitulos/${id_grupo + '_' + serie_uid + '_' + id_capitulo + '/' + paginas[paginaActual]?.url}`} alt="capitulo" />
                            :
                            null
                }
            </div>
            {
                !paginacion ?
                    <div>
                        {paginaActual + 1 < numeroPaginas ? <button onClick={next} style={{ padding: 5, backgroundColor: "#7bb9ff", border: "none", borderRadius: 3, fontWeight: "700", textTransform: "uppercase" }}>Siguiente</button> : null}
                        <br />
                        {paginaActual - 1 >= 0 ? <button onClick={prev} style={{ padding: 5, backgroundColor: "#7bb9ff", border: "none", borderRadius: 3, fontWeight: "700", textTransform: "uppercase" }}>Anterior</button> : null}
                    </div>
                    : null
            }
        </div>
    )
}

export default ContainerVermanga;