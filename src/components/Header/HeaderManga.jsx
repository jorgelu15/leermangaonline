import { Link } from 'react-router-dom';
import moon from '../../img/moon.svg'
import routes from '../../helpers/routes';

const Header = (props) => {

    const { paginacion, setPaginacion } = props

    return (
        <header className="header-vermanga">
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        <li><Link to={routes.home}><i>LEER</i><b>MANGA</b>ONLINE</Link></li>
                    </ul>
                    <div className="info">
                        <div>
                            <p className='title'><Link to="../manga">Jujutsu Kaisen</Link> Capitulo 70.00 Inventario Oculto...</p>
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