
import Facebook from "../../img/facebook.svg"
import Instagram from "../../img/instagram.svg"
import Discord from "../../img/discord.svg"
import BasicAccordion from "../Container/BasicAccordion"

const Footer = (props) => {

    return (
        <footer className="footer-manga">
            <div className="footer-top">
                <div className="site">
                    <h3>Sitio Web</h3>
                    <ul>
                        <li><a href="#">Sobre LeerMangaOnline</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Manual de Uso</a></li>
                        <li><a href="#">Colaborar</a></li>
                        <li><a href="#">Normas de la Comunidad</a></li>
                        <li><a href="#">Terminos de Uso</a></li>
                        <li><a href="#">Politica de Privacidad</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="explore">
                    <h3>Explorar</h3>
                    <ul>
                        <li><a href="#">Biblioteca</a></li>
                        <li><a href="#">Grupos</a></li>
                        <li><a href="#">Listas</a></li>
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
                <BasicAccordion></BasicAccordion>
            </div>
            
            <div className="footer-botton">
                <div className="ftb-left">
                    <div className="social">
                        <p><i>LEER</i><b>MANGA</b>ONLINE</p>
                        <div className="sep-v"></div>
                        <img src={Facebook}/>
                        <img src={Instagram}/>
                        <img src={Discord}/>
                    </div>
                    <p className="copyr">Copyright 2023 LeerMangaOnline, Todos los derechos reservados.</p>
                </div>
                <div className="ftb-right">
                    <select name="" id="">
                        <option value="Auto">Auto</option>
                        <option value="Dia">Dia</option>
                        <option value="Noche">Noche</option>
                    </select>
                </div>
            </div>
        </footer>
    )
}

export default Footer;