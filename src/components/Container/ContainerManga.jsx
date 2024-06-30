
import { useEffect, useState } from "react"
import React, { useRef } from 'react';

import CustomizedAccordions from "../Mui/Accordions/Accordion";
import image from "../../img/jujutsu-manga.jpg"
import chat from "../../img/chat.png";
import route from "../../helpers/routes";

import red1 from "../../img/redes/red1.png";
import red2 from "../../img/redes/red2.png";
import red3 from "../../img/redes/red3.png";
import red4 from "../../img/redes/red4.png";
import red5 from "../../img/redes/red5.png";

import useAuth from "../../hooks/useAuth";
import { useSeries } from "../../hooks/useSeries";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";


const ContainerManga = (props) => {

    const { usuario } = useAuth();
    const { serie, capitulos, generosSerie, votos, getSerie, getGeneroSerie, getPromVotoSerie, getCapitulosSerie } = useSeries();

    let { id } = useParams();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCapitulos, setFilteredCapitulos] = useState(capitulos);

    useEffect(() => {
        const results = capitulos?.filter(capitulo =>
            capitulo.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCapitulos(results);
    }, [searchTerm, capitulos]);

    useEffect(() => {
        if (!serie) {
            getSerie(id);
        }
    }, []);

    useEffect(() => {
        if (!generosSerie) {
            getGeneroSerie(id);
        }
    }, []);

    useEffect(() => {
        if (!votos) {
            getPromVotoSerie(id);
        }
    }, []);

    useEffect(() => {
    }, [votos])




    // useEffect(() => {
    //     (function () { // DON'T EDIT BELOW THIS LINE
    //         var d = document, s = d.createElement('script');
    //         s.src = 'https://lmo-manga.disqus.com/embed.js';
    //         s.setAttribute('data-timestamp', +new Date());
    //         (d.head || d.body).appendChild(s);
    //     })();

    // }, []);



    return (
        <div>
            <section className="manga-desc" style={{
                backgroundImage: `linear-gradient(to bottom, transparent, black), url('http://upload.leermangaonline.com/uploads/obras/${serie?.banner}')`,
            }}>
                <div className="desc-content">
                    <div className="content">
                        <div className="imagen" style={{
                            backgroundImage: `linear-gradient(to bottom, transparent, black), url('http://upload.leermangaonline.com/uploads/obras/${serie?.banner}')`,
                        }}>
                            <img src={`http://upload.leermangaonline.com/uploads/obras/${serie?.portada}`} alt="portada" />
                        </div>
                        <div className="resumen">
                            <div className="res-top">
                                <h2>{serie?.nombre}</h2>
                                <Rating rate={votos?.prom_vot} votos={votos?.total_vot} />
                            </div>
                            <p>{serie?.sinopsis}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="capitulos">
                <div className="cap-box">
                    <div className="wid-box">
                        <div className="start-box">
                            <h2>Lista de capitulos</h2>
                            <input
                                type="text"
                                placeholder="Buscar"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                        <hr />
                        <CustomizedAccordions id={id} filteredCapitulos={filteredCapitulos}></CustomizedAccordions>
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
                        {generosSerie?.map((serie, idx) => {
                            return (
                                <span key={idx} className="genero"><button>{serie.genero.genero}</button></span>
                            )
                        })}
                    </div>
                    <div className="estado">
                        <p className="type-titles">Estado</p>
                        <div className="public">
                            <div className="point-red"></div>
                            <p>{serie?.estado}</p>
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