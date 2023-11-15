
import { Link, useNavigate } from 'react-router-dom';
import menubar from '../../img/menu-bar.svg'
import routes from '../../helpers/routes';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import AccountMenu from '../Mui/Menu/AccountMenu';

import logop1 from "../../img/logop2.png"

const Header = (props) => {

    const { autenticado, usuario, usuarioAutenticado, logOut } = useAuth();
    // let location = useLocation();

    // useEffect(() => {
    //     console.log(autenticado, "linea 14")
    //     if (!autenticado) {
    //       usuarioAutenticado();
    //     }
    //   }, [autenticado]);


    return (
        <header className="header-manga">
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        {/* <li><Link to={routes.home}><i>LEER</i><b>MANGA</b>ONLINE</Link></li> */}
                        <li><Link to={routes.home}><img src={logop1} /></Link></li>
                    </ul>
                    <ul className="list-menu">
                        <li><Link>DIRECTORIO</Link></li>
                        <li><Link to={routes.groups}>GRUPOS</Link></li>
                        <li><Link>FORO</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div>
                        <p>
                            <input type="search" placeholder="Buscar..." className="input-style search" />
                        </p>
                        { !autenticado ? 
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