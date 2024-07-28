import { Link, useParams } from 'react-router-dom';
import moon from '../../img/moon.svg'
import routes from '../../helpers/routes';
import { useSeries } from '../../hooks/useSeries';
import { useEffect } from 'react';
import { useText } from '../../hooks/useText';

const Header = (props) => {

    const { paginacion, setPaginacion } = props

    const { serie_uid, num_cap, id_capitulo } = useParams();

    const { serie, capitulo, getSerie, getCapitulo } = useSeries();

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

    console.log(capitulo)
    
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
                            <p>Subido por <a href="#">El club de askin</a></p>
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