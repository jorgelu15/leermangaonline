
import menubar from '../../img/menu-bar.svg'

const Header = (props) => {

    return (
        <header className="header-manga">
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        <li><a href="#"><i>LEER</i><b>MANGA</b>ONLINE</a></li>
                    </ul>
                    <ul className="list-menu">
                        <li><a href="#">DIRECTORIO</a></li>
                        <li><a href="#">GRUPOS</a></li>
                        <li><a href="#">FORO</a></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div>
                        <p>
                            <input type="search" placeholder="Buscar..." className="input-style search" />
                        </p>
                        <p>ACCEDER</p>
                        <p>REGISTRARSE</p>
                    </div>
                    <button><img src={menubar} alt="" /></button>
                </div>
            </nav>
        </header>
    )
}

export default Header;