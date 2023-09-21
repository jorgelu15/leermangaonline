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
                            <p className='title'><a href="#">Naruto </a>Capitulo 376</p>
                            <p>Subido por <a href="#">Joker Fansub</a></p>
                        </div>
                        <p>MANGA. El sentido de la lectura es de derecha a izquierda</p>
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