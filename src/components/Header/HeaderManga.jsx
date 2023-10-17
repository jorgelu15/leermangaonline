import moon from '../../img/moon.svg'

const Header = (props) => {

    return (
        <header className="header-vermanga">
            <nav className="navbar">
                <div className="nav-left">
                    <ul>
                        <li><a href="#"><i>LEER</i><b>MANGA</b>ONLINE</a></li>
                    </ul>
                    <div className="info">
                        <div>
                            <p className='title'><a href="#">Jujutsu Kaisen </a>Capitulo 70.00 Inventario Oculto...</p>
                            <p>Subido por <a href="#">El club de askin</a></p>
                        </div>
                        <p>MANGA. El sentido de la lectura es de izquierda a derecha</p>
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