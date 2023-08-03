
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
                        <p><i>Perfil</i></p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;