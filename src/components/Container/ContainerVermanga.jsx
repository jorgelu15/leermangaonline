import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';

import pagina1 from '../../img/pagina1.png'
import pagina2 from '../../img/pagina2.png'
import pagina3 from '../../img/pagina3.png'
import vermangaContext from "../../context/vermanga/vermangaContext";
import { useSeries } from "../../hooks/useSeries";
import { useParams } from "react-router-dom";

const ContainerVermanga = (props) => {

    const { paginacion, toggleVisibility } = props;

    const [paginaActual, setPaginaActual] = useState(0);

    const { id_grupo, serie_uid, id_capitulo, num_cap } = useParams();

    const { paginas, getCapitulo } = useContext(vermangaContext);

    const numeroPaginas = paginas?.length;

    const mangaViewRef = useRef(null);

    const next = () => {
        if (paginaActual + 1 < numeroPaginas) {
            setPaginaActual(paginaActual + 1);
            // Deslizar la pantalla hacia arriba
            mangaViewRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const prev = () => {
        if (paginaActual - 1 >= 0) {
            setPaginaActual(paginaActual - 1);
            // Deslizar la pantalla hacia arriba
            mangaViewRef.current.scrollIntoView({ behavior: 'smooth' });
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
            <div ref={mangaViewRef} className="manga-view" onClick={toggleVisibility}>
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
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center", // Centra los elementos horizontalmente
                        alignItems: "center", // Centra los elementos verticalmente
                        width: "100%",
                        maxWidth: "1280px",
                        margin: "0 auto" // Centra el contenedor en su padre
                    }}>
                        {paginaActual - 1 >= 0 ? (
                            <button
                                onClick={prev}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '10px 20px',
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    marginRight: '10px' // Espacio entre los botones
                                }}
                            >
                                Anterior
                            </button>
                        ) : null}
                        {paginaActual + 1 < numeroPaginas ? (
                            <button
                                onClick={next}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '10px 20px',
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer'
                                }}
                            >
                                Siguiente
                            </button>
                        ) : null}

                    </div>
                    : null
            }

        </div>

    )
}

export default ContainerVermanga;
