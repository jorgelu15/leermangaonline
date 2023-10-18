
import { Link, useNavigate } from 'react-router-dom';
import menubar from '../../img/menu-bar.svg'
import routes from '../../helpers/routes';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';

import upload from "../../img/upload-solid.svg"
import userCircle from "../../img/circle-user-solid.svg"


const HeaderPanel = (props) => {

    const { autenticado, usuario, usuarioAutenticado, logOut } = useAuth();

    return (
        <header className="header-manga header-panel">
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        <li><Link to={routes.home}><i>LEER</i><b>MANGA</b>ONLINE</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div>    
                        <p><Link to={routes.subirmanga}><img src={upload} />Subir capitulo</Link></p>
                        <p><Link to={routes.perfil}><img src={userCircle} />Perfil</Link></p>
                    </div>
                    <button><img src={menubar} alt="" /></button>
                </div>
            </nav>
        </header>
    )
}

export default HeaderPanel;