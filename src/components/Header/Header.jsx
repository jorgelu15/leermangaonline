
import { Link, useNavigate } from 'react-router-dom';
import menubar from '../../img/menu-bar.svg'
import routes from '../../helpers/routes';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import AccountMenu from '../Mui/Menu/AccountMenu';

import logop1 from "../../img/logop2.png"

const Header = (props) => {

    const { autenticado } = useAuth();
    const navigate = useNavigate();
    const [busqueda, guardarBusqueda] = useState({
        consulta: "",
    });

    const { consulta } = busqueda;

    const onChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            buscador();
        }
    };

    const buscador = () => {
        if (consulta?.trim() !== "") {
            navigate(`${routes.directory}?q=${consulta}`); // Redirige a la página de búsqueda con la consulta
        }
    };

    return (
        <header className="header-manga">
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        {/* <li><Link to={routes.home}><i>LEER</i><b>MANGA</b>ONLINE</Link></li> */}
                        <li><Link to={routes.home}><img src={logop1} /></Link></li>
                    </ul>
                    <ul className="list-menu">
                        <li><Link to={routes.directory}>DIRECTORIO</Link></li>
                        <li><Link to={routes.groups}>GRUPOS</Link></li>
                        <li><Link>FORO</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div>
                        <p>
                            <input
                                type="search"
                                placeholder="Buscar..."
                                className="input-style search"
                                name='consulta'
                                value={consulta}
                                onChange={onChange}
                                onKeyDown={handleKeyDown} />
                        </p>
                        {!autenticado ?
                            <>
                                <p><Link to={routes.login}>ACCEDER</Link></p>
                                <p><Link to={routes.register}>REGISTRARSE</Link></p>
                            </>
                            :

                            <>
                                <AccountMenu></AccountMenu>
                                {/* <p><Link to={routes.perfil}>PERFIL</Link></p>
                                <p><a onClick={() => logOut()}>CERRAR</a></p> */}
                            </>
                        }

                    </div>
                    {/* <button><img src={menubar} alt="" /></button> */}
                </div>
            </nav>
        </header>
    )
}

export default Header;