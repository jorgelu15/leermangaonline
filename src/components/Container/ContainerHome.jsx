
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


const ContainerHome = (props) => {
    const { series, seriesPopulares, seriesTrendingSemanal, seriesTrendingMensual, getSeriesTrending, getSeriesPopulares } = useSeries();
    const { reemplazarEspaciosConGuiones } = useText();
    const { grupos, getBestScans } = useGrupos();
    console.log(seriesPopulares)
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
                                        <div key={idx} className="cont-cardgr">
                                            <div className="card" style={{ backgroundImage: `url('http://upload.leermangaonline.com/uploads/obras/${grupo.portada}')` }}>
                                                <div>
                                                </div>
                                                <p className="nombre">{grupo.nombre}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </section>

                    <section className="sec-noticias">
                        <h2>Ultimas Noticias</h2>

                        <div className="cards">
                            <div className="card">
                                <img src={stafs} />
                                <div className="info">
                                    <div>
                                        <h3>Se buscan STAFFS</h3>
                                        <p>Se busca personal con o sin experiencia con ganas de colaborar, somos un scan que se decica a la traduccion
                                            de mangas que fueron abandonados por otros scan, o que son poco conocidos, se busca Redrawer, traductores.
                                        </p>
                                    </div>
                                    <p className="fecha">08/03/2023</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://www.geekmi.news/__export/1665685634810/sites/debate/img/2022/10/13/makima3.jpg_423682103.jpg" />
                                <div className="info">
                                    <div>
                                        <h3>¿Cosplay por la candidatura?</h3>
                                        <p>Candidata en Argentina promete vestirse de Makima si gana. En una publicación reciente por parte de Lilia Lemoine, quien se describe a sí mis...
                                        </p>
                                    </div>
                                    <p className="fecha">18/10/2023</p>
                                </div>
                            </div>
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
                                                    <p className="calificacion">8.0</p>{/** falta la calif*/}
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
                                                    <p className="calificacion">8.0</p>{/** falta la calif*/}
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