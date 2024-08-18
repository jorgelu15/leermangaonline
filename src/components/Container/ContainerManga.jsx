import { useEffect, useState } from "react";
import React from 'react';
import { Icon } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import CustomizedAccordions from "../Mui/Accordions/Accordion";
import image from "../../img/jujutsu-manga.jpg";
import chat from "../../img/chat.png";
import route from "../../helpers/routes";

import red1 from "../../img/redes/red1.png";
import red2 from "../../img/redes/red2.png";
import red3 from "../../img/redes/red3.png";
import red4 from "../../img/redes/red4.png";
import red5 from "../../img/redes/red5.png";

import { useAuth } from "../../hooks/useAuth";
import { useSeries } from "../../hooks/useSeries";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import TabsReacciones from "../Mui/Tabs/TabsReacciones";

const ContainerManga = (props) => {
    const { usuario } = useAuth();
    const { serie, visualizaciones, capitulos, generosSerie, votos, getSerie, getGeneroSerie, getPromVotoSerie, getCapitulosSerie, getVisualizacion } = useSeries();

    let { id, serie: serie_param } = useParams();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCapitulos, setFilteredCapitulos] = useState(capitulos);
    const [viewPerfil, setViewPerfil] = useState(true);

    useEffect(() => {
        const results = capitulos?.filter(capitulo =>
            capitulo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            capitulo.numero.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCapitulos(results);
    }, [searchTerm, capitulos]);

    useEffect(() => {
        getSerie(id);
        getGeneroSerie(id);
        getPromVotoSerie(id);
        getCapitulosSerie(id);
    }, [id]);

    useEffect(() => {
        setFilteredCapitulos(capitulos);
    }, [capitulos]);

    const items = {
        tabs: 5,
        cont: [
            {
                tab: "Leido",
                cards: [
                    { nombre: "jujutsu Kaisen", categoria: "Manga", calif: "8.53", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.webp" },
                    { nombre: "oshi no ko", categoria: "Manga", calif: "9.05", url: "https://otakuteca.com/images/books/cover/5efe4afd1d0c5.webp" },
                    { nombre: "Kanojo, Okarishimasu", categoria: "Manga", calif: "3.91", url: "https://otakuteca.com/images/books/cover/606cda6f538c7.webp" },
                    { nombre: "Class de 2 Banme ni...", categoria: "Manga", calif: "8.40", url: "https://otakuteca.com/images/books/cover/62e1dbb29f444.webp" },
                    { nombre: "Kanan-sama Might be...", categoria: "Manga", calif: "8.92", url: "https://otakuteca.com/images/books/cover/629634d78ab1c.webp" },
                ]
            },
            {
                tab: "Pendiente",
                cards: [
                    { nombre: "El dios de la escuela se...", categoria: "manhwa", calif: "8.78", url: "https://otakuteca.com/images/books/cover/5d3df9c5378b5.webp" },
                    { nombre: "La vida despues de la muerte", categoria: "manhwa", calif: "8.89", url: "https://otakuteca.com/images/books/cover/5ddde8a92558c.webp" },
                    { nombre: "Guerrero de nivelacion ha...", categoria: "manhwa", calif: "10.00", url: "https://otakuteca.com/images/books/cover/645feeabbf6ae.webp" }
                ]
            },
            {
                tab: "Siguiendo",
                cards: [
                    { nombre: "La era del gran diluvio", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/642cb67221a43.webp" },
                    { nombre: "Song of the skywalkers", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/5d5fd8924ecb7.webp" },
                    { nombre: "Comienzo de la era humana", categoria: "manhua", calif: "0.00", url: "https://otakuteca.com/images/books/cover/5f4ad3371b22a.webp" },
                    { nombre: "¿Mi esposa es en realidad ...", categoria: "manhua", calif: "7.50", url: "https://otakuteca.com/images/books/cover/602a535b9f308.webp" }
                ]
            },
            {
                tab: "Favorito",
                cards: [
                    { nombre: "Mis discipulas son todas in...", categoria: "manhua", calif: "7.71", url: "https://otakuteca.com/images/books/cover/5fbb1b741ba61.webp" },
                    { nombre: "Comienzo de la era humana", categoria: "manhua", calif: "0.00", url: "https://otakuteca.com/images/books/cover/5f4ad3371b22a.webp" },
                    { nombre: "¿Mi esposa es en realidad ...", categoria: "manhua", calif: "7.50", url: "https://otakuteca.com/images/books/cover/602a535b9f308.webp" }
                ]
            },
            {
                tab: "Abandonado",
                cards: [
                ]
            }
        ]
    }

    useEffect(() => {
        if (id) {
            getVisualizacion(id)
        }
    }, [id])

    const shareFacebook = () => {
        // URL de tu página que quieres compartir
        const url = `${import.meta.env.VITE_BASE_URL}/manga/${id}/${serie_param}`;

        // Texto opcional para el post en Facebook
        const text = serie?.sinopsis;

        // Construir la URL para compartir en Facebook
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;

        // Abrir una nueva ventana para compartir
        window.open(facebookUrl, '_blank', 'width=600,height=400');
    }
    const shareX = () => {
        // URL de tu página que quieres compartir
        const url = `${import.meta.env.VITE_BASE_URL}/manga/${id}/${serie_param}`;

        // Texto opcional para el post en Facebook
        const text = serie?.sinopsis;

        // Construir la URL para compartir en Facebook
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

        // Abrir una nueva ventana para compartir
        window.open(twitterShareUrl, '_blank', 'width=600,height=400');
    }
    const shareVK = () => {
        // URL de tu página que quieres compartir
        const url = `${import.meta.env.VITE_BASE_URL}/manga/${id}/${serie_param}`;

        // Texto opcional para el post en Facebook
        const text = serie?.sinopsis;

        // Construir la URL para compartir en Facebook
        const vkShareUrl = `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;

        // Abrir una nueva ventana para compartir
        window.open(vkShareUrl, '_blank', 'width=600,height=400');
    }
    const shareTelegram = () => {
        // URL de tu página que quieres compartir
        const url = `${import.meta.env.VITE_BASE_URL}/manga/${id}/${serie_param}`;

        // Texto opcional para el post en Facebook
        const text = serie?.sinopsis;

        // Construir la URL para compartir en Facebook
        const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;

        // Abrir una nueva ventana para compartir
        window.open(telegramShareUrl, '_blank', 'width=600,height=400');
    }
    const shareWs = () => {
        // URL de tu página que quieres compartir
        const url = `${import.meta.env.VITE_BASE_URL}/manga/${id}/${serie_param}`;

        // Texto opcional para el post en Facebook
        const text = serie?.sinopsis;

        // Construir la URL para compartir en Facebook
        const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`;

        // Abrir una nueva ventana para compartir
        window.open(whatsappShareUrl, '_blank', 'width=600,height=400');
    }
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
                            <img src={`http://upload.leermangaonline.com/uploads/obras/${serie?.portada}`} alt="portada" width={253} height={380} style={{ objectFit: "cover" }} />
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
            <div className={viewPerfil ? 'hidden-indicator' : null}>
                <TabsReacciones id={id} items={items} viewPerfil={viewPerfil} setViewPerfil={setViewPerfil}></TabsReacciones>
            </div>
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
                    <div className="tipo">
                        <p className="type-titles">Visualizaciones</p>
                        <p style={{ display: "flex", alignItems: "center" }}><RemoveRedEyeIcon style={{ marginRight: 5 }} /> {visualizaciones}</p>
                    </div>
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
                            <img onClick={shareFacebook} src={red1} />
                            <img onClick={shareX} src={red2} />
                            <img onClick={shareVK} src={red3} />
                            <img onClick={shareTelegram} src={red4} />
                            <img onClick={shareWs} src={red5} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContainerManga;
