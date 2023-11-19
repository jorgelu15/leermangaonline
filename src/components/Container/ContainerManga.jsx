
import { useEffect, useState } from "react"
import React, { useRef } from 'react';

import CustomizedAccordions from "../Mui/Accordions/Accordion";
import image from "../../img/jujutsu-manga.jpg"
import chat from "../../img/chat.png";

import red1 from "../../img/redes/red1.png";
import red2 from "../../img/redes/red2.png";
import red3 from "../../img/redes/red3.png";
import red4 from "../../img/redes/red4.png";
import red5 from "../../img/redes/red5.png";

import useAuth from "../../hooks/useAuth";


const ContainerManga = (props) => {

    const { usuario } = useAuth();

    useEffect(() => {
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://lmo-manga.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
        
    }, []);


    return (
        <div>
            <section  className="manga-desc">
                <div className="desc-content">
                    <div className="content">
                        <div className="imagen">
                            <img src={image} alt="portada"/>
                        </div>
                        <div className="resumen">
                            <h1>Jujutsu Kaisen (2018)</h1>
                            <p>Yuji Itadori es un estudiante con una increíble fuerza física pero no tiene ningún interés en los deportes y prefiere ser parte del club de ocultismo. Un día, espíritu maligno real aparece en la escuela y cambia la vida de Yuji para siempre.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="capitulos">
                <div className="cap-box">
                    <div className="wid-box">
                        <div className="start-box">
                            <h2>Lista de capitulos</h2>
                            <input type="text" placeholder="Buscar"/>
                        </div>
                        <hr />
                        <CustomizedAccordions></CustomizedAccordions>
                    </div>
                    <div className="chat">
                        
                        <div id="disqus_thread"></div>
                        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                        {/* <img src={chat} alt="chat"/> */}
                    </div>
                </div>
                
                <div className="manga-type">
                    <div className="generos">
                        <p className="type-titles">Generos</p>
                        <span className="genero"><button>Seinen</button></span>
                        <span className="genero"><button>Drama</button></span>
                        <span className="genero"><button>Misterio</button></span>
                        <span className="genero"><button>Sobrenatural</button></span>
                        <span className="genero"><button>Accion</button></span>
                    </div>
                    <div className="estado">
                        <p className="type-titles">Estado</p>
                        <div className="public">
                            <div className="point-red"></div>
                            <p>Publicandose</p>
                        </div>
                    </div>
                    <div className="tipo">
                        <p className="type-titles">Tipo</p>
                        <p>Shounen</p>
                    </div>
                    <div className="compartir">
                        <p className="type-titles">Compartir</p>
                        <div className="socials">
                            <img src={red1} />
                            <img src={red2} />
                            <img src={red3} />
                            <img src={red4} />
                            <img src={red5} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContainerManga;