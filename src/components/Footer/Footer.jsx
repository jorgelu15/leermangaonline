
import Facebook from "../../img/facebook.svg"
import Instagram from "../../img/instagram.svg"
import Discord from "../../img/discord.svg"

import AccordionFooter from "../Mui/Accordions/AccordionFooter"
import { Link } from "react-router-dom";
import routes from "../../helpers/routes";

const Footer = (props) => {

    return (
        <footer className="footer-manga">
            <div className="footer-top">
                <div className="site">
                    <h3>Sitio Web</h3>
                    <ul>
                        <li><Link to={routes.terms}>Sobre LeerMangaOnline</Link></li>
                        <li><Link to={routes.terms}>Preguntas Frecuentes</Link></li>
                        <li><Link to={routes.terms}>Manual de Uso</Link></li>
                        <li><Link to={routes.terms}>Normas de la Comunidad</Link></li>
                        <li><Link to={routes.terms}>Terminos de Uso</Link></li>
                        <li><Link to={routes.terms}>Politica de Privacidad</Link></li>
                    </ul>
                </div>
                <div className="explore">
                    <h3>Explorar</h3>
                    <ul>
                        <li><Link to={routes.directory}>Biblioteca</Link></li>
                        <li><Link to={routes.groups}>Grupos</Link></li>
                    </ul>
                </div>
                <div className="contents">
                    <h3>Contenidos</h3>
                    <div>
                        <p>LeerMangaOnline no realiza las traducciones aqui realizadas
                            y solo es un repositorio con visor propio para que distintos
                            grupos de traduccion puedan compartir de forma publica y
                            organizada para el disfrute de todos.
                        </p>
                        <p>
                            This site is protected by reCAPTCHA and the Google Privacy
                            and Terms of Service apply.
                        </p>
                    </div>
                </div>
            </div>

            <div className="menu-accordion">
                <AccordionFooter></AccordionFooter>
            </div>

            <div className="footer-botton">
                <div className="ftb-left">
                    <div className="social">
                        <p><i>LEER</i><b>MANGA</b>ONLINE</p>
                        <div className="sep-v"></div>
                        <img src={Facebook} />
                        <img src={Instagram} />
                        <img src={Discord} />
                    </div>
                    <p className="copyr">Copyright 2023 LeerMangaOnline, Todos los derechos reservados. Desarrollado por <b><Link to={'https://midgar.artosh.dev/landing'}>Midgar</Link></b></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;