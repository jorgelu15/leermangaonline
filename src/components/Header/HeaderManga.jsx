import { Link, useParams } from 'react-router-dom';
import moon from '../../img/moon.svg'
import routes from '../../helpers/routes';
import { useSeries } from '../../hooks/useSeries';
import { useEffect } from 'react';
import { useText } from '../../hooks/useText';
import { useGrupos } from '../../hooks/useGrupos';

const Header = (props) => {

    const { paginacion, setPaginacion } = props

    const { id_grupo, serie_uid, num_cap, id_capitulo } = useParams();

    const { serie, capitulo, getSerie, getCapitulo } = useSeries();

    const { grupo, getGrupo } = useGrupos();

    const { reemplazarEspaciosConGuiones } = useText();

    useEffect(() => {
        if(serie_uid){
            getSerie(serie_uid);
        }
    }, [serie_uid]);

    useEffect(() => {
        if(id_capitulo){
            getCapitulo(id_capitulo);
        }
    }, [id_capitulo]);

    useEffect(() => {
        if(id_grupo){
            getGrupo(id_grupo);
        }
    }, [id_grupo]);

    return (
        <header className="header-vermanga">
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        <li><Link to={routes.home}><i>LEER</i><b>MANGA</b>ONLINE</Link></li>
                    </ul>
                    <div className="info">
                        <div>
                            <p className='title' style={{ textTransform: "capitalize" }}><Link to={routes.manga + `/${serie_uid}/${reemplazarEspaciosConGuiones(serie?.nombre.toLowerCase())}`}>{serie?.nombre}</Link> Capitulo: {num_cap} {capitulo?.titulo}</p>
                            <p>Subido por <Link to={routes.scanlation + `/${id_grupo}`}>{grupo?.nombre}</Link></p>
                        </div>
                        <p>MANGA. El sentido de la lectura es de izquierda a derecha</p>
                        <button onClick={() => setPaginacion(!paginacion)}  style={{ padding: 5, backgroundColor: "#7bb9ff", border: "none", borderRadius: 3, fontWeight: "700", textTransform: "uppercase" }}>{paginacion ? "Paginado" : "cascada"}</button>

                    </div>
                    
                </div>
                <div className="nav-right">
                    <button>
                        <img src={moon} alt="" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;