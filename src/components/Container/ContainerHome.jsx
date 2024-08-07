
import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Slider from "./Slider";

import isugo from "../../img/isugodibujo.png"
import stafs from "../../img/buscastafs.jpg"
import chatej from "../../img/chatmanga.png"
import joindc from "../../img/joindc.png"

import TabsHome from "../Mui/Tabs/TabsHome";
import TabsTop from "../Mui/Tabs/TabsTop";
import { useSeries } from "../../hooks/useSeries";
import { MANGA, MANHUA, MANHWA } from "../../types";
import { useText } from "../../hooks/useText";
import routes from '../../helpers/routes';
import { useGrupos } from '../../hooks/useGrupos';
import { useAdmin } from '../../hooks/useAdmin';


const ContainerHome = (props) => {
    const { noticias, getAllNoticias } = useAdmin(); // Set default value
    const { series, seriesPopulares, seriesTrendingSemanal, seriesTrendingMensual, getSeriesTrending, getSeriesPopulares } = useSeries();
    const { reemplazarEspaciosConGuiones } = useText();
    const { grupos, getBestScans } = useGrupos();

    let items = {
        tabs: 3,
        cont: [
            {
                tab: "Mangas",
                cards: seriesPopulares?.filter(serie => serie.tipo === MANGA)
            },
            {
                tab: "P.Manhuas",
                cards: seriesPopulares?.filter(serie => serie.tipo === MANHUA)
            },
            {
                tab: "P.Manhwas",
                cards: seriesPopulares?.filter(serie => serie.tipo === MANHWA)
            }
        ]
    }

    let items_trend = {
        tabs: 3,
        cont: [
            {
                tab: "Mangas",
                cards: seriesTrendingSemanal?.filter(serie => serie.tipo === MANGA)
            },
            {
                tab: "T.Manhuas",
                cards: seriesTrendingSemanal?.filter(serie => serie.tipo === MANHUA)
            },
            {
                tab: "T.Manhwas",
                cards: seriesTrendingSemanal?.filter(serie => serie.tipo === MANHWA)
            }
        ]
    }

    const items_tp = {
        tabs: 2,
        cont: [
            {
                tab: "Top Semanal",
                cards: seriesTrendingSemanal
            },
            {
                tab: "Top Mensual",
                cards: seriesTrendingMensual
            }
        ]
    }

    useEffect(() => {
        getSeriesTrending("semanal");
        getSeriesTrending("mensual");
    }, [])

    useEffect(() => {
        getBestScans();
    }, [])

    useEffect(() => {
        getSeriesPopulares()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            await getAllNoticias(); // Fetch series data
        };
        fetchData();
    }, []); // Only depend on getSeries

    const formatDate = (fecha) => {
        const date = new Date(fecha);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return (`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
    }

    return (
        <div>
            <Slider></Slider>
            <div className="home-mng">
                <main className="main-home">

                    <TabsHome items={items}></TabsHome>
                    <TabsHome items={items_trend}></TabsHome>

                    <section className="sec-grupos">
                        <h2>Los mejores scan/grupos del mes</h2>
                        <div className="sec-cards">

                            {
                                grupos?.map((grupo, idx) => {
                                    return (
                                        <Link to={routes.scanlation+`/${grupo.id}`} key={idx} className="cont-cardgr">
                                            <div className="card" style={{ backgroundImage: `url('http://upload.leermangaonline.com/uploads/obras/${grupo.portada}')` }}>
                                                <div>
                                                </div>
                                                <p className="nombre">{grupo.nombre}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </section>

                    <section className="sec-noticias">
                        <h2>Ultimas Noticias</h2>

                        <div className="cards">
                            {
                                noticias?.map((noticia, idx) => {
                                    return (
                                        <div key={idx} className="card">
                                            <img src={import.meta.env.VITE_BASE_URL_IMAGES + '/uploads/noticia/' + noticia.url} />
                                            <div className="info">
                                                <div>
                                                    <h3>{noticia.titulo}</h3>
                                                    <p>{noticia.contenido}
                                                    </p>
                                                </div>
                                                <p className="fecha">{formatDate(noticia.createdAt)}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    <section className="sec-subidos">

                        <h2>Ultimos Subidos</h2>
                        <div className="sec-cards">
                            {
                                series?.map((serie, idx) => {
                                    return (
                                        <Link key={idx} to={routes.manga + `/${serie.serie_uid}/${reemplazarEspaciosConGuiones(serie.nombre.toLowerCase())}`} className="cont-card">
                                            <div className="card" style={{
                                                backgroundImage: `url('http://upload.leermangaonline.com/uploads/obras/${serie.portada}')`
                                            }}>
                                                <div>
                                                    <p></p>
                                                    <p className="calificacion">{serie?.votos[0]?.prom_vot}</p>{/*  falta la calificacion */}
                                                </div>
                                                <p className="nombre">{serie.nombre}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                        </div>

                    </section>

                    <section className="sec-subidos">

                        <h2>Tendencias</h2>
                        <div className="sec-cards">
                            {
                                series?.map((serie, idx) => {
                                    return (
                                        <Link key={idx} to={routes.manga + `/${serie.serie_uid}/${reemplazarEspaciosConGuiones(serie.nombre.toLowerCase())}`} className="cont-card">
                                            <div className="card" style={{
                                                backgroundImage: `url('http://upload.leermangaonline.com/uploads/obras/${serie.portada}')`
                                            }}>
                                                <div>
                                                    <p></p>
                                                    <p className="calificacion">{serie?.votos[0]?.prom_vot}</p>{/*  falta la calificacion */}
                                                </div>
                                                <p className="nombre">{serie.nombre}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                        </div>

                    </section>
                </main>

                <aside className="aside-home">
                    <section className="sec-tops">
                        <TabsTop items={items_tp}></TabsTop>
                    </section>

                    <section className="sec-chatmanga">
                        <img src={chatej} />
                    </section>

                    <section className="sec-joindc">
                        <img src={joindc} />
                    </section>

                    <section className="sec-dibujo">
                        <h2>Dibujo del Mes</h2>
                        <div className="cont-img">
                            <img src={isugo} />
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    )
}

export default ContainerHome;