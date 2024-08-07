import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSeries } from '../../hooks/useSeries';
import { useText } from '../../hooks/useText';
import { useGrupos } from '../../hooks/useGrupos';
import routes from '../../helpers/routes';
import moon from '../../img/moon.svg';

const Header = (props) => {
    const { paginacion, setPaginacion, isVisible } = props;
    const { id_grupo, serie_uid, num_cap, id_capitulo } = useParams();
    const { serie, capitulo, getSerie, getCapitulo } = useSeries();
    const { grupo, getGrupo } = useGrupos();
    const { reemplazarEspaciosConGuiones } = useText();
    

    useEffect(() => {
        if (serie_uid) {
            getSerie(serie_uid);
        }
    }, [serie_uid]);

    useEffect(() => {
        if (id_capitulo) {
            getCapitulo(id_capitulo);
        }
    }, [id_capitulo]);

    useEffect(() => {
        if (id_grupo) {
            getGrupo(id_grupo);
        }
    }, [id_grupo]);

    

    return (
        <>
            <header className={`header-vermanga ${isVisible ? 'visible' : 'hidden'}`}>
                <nav className="navbar">
                    <div className="nav-left">
                        <Link style={{ fontSize: 24 }} to={routes.home}><i>LEER</i><b>MANGA</b>ONLINE</Link>
                        <div className="info">
                            <div style={{ flexDirection: "column", textAlign: "left" }}>
                                <p className='title' style={{ textTransform: "capitalize" }}>
                                    <Link to={routes.manga + `/${serie_uid}/${reemplazarEspaciosConGuiones(serie?.nombre.toLowerCase())}`}>
                                        {serie?.nombre}
                                    </Link>
                                </p>
                                <p>Capitulo: {num_cap} {capitulo?.titulo}</p>
                                <p>Subido por <Link to={routes.scanlation + `/${id_grupo}`}>{grupo?.nombre}</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div
                            onClick={() => setPaginacion(!paginacion)}
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
                            {paginacion ? (
                                <>
                                    <i className="fas fa-file-alt" style={{ marginRight: '8px' }}></i>
                                    Paginado
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-stream" style={{ marginRight: '8px' }}></i>
                                    Cascada
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
