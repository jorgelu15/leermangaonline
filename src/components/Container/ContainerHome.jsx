
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


const ContainerHome = (props) => {
    const { series, seriesTrendingSemanal, seriesTrendingMensual, getSeriesTrending } = useSeries();
    const { reemplazarEspaciosConGuiones } = useText();

    let items = {
        tabs: 3,
        cont: [
            {
                tab: "Mangas",
                cards: series?.filter(serie => serie.tipo === MANGA)
            },
            {
                tab: "P.Manhuas",
                cards: series?.filter(serie => serie.tipo === MANHUA)
            },
            {
                tab: "P.Manhwas",
                cards: series?.filter(serie => serie.tipo === MANHWA)
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

                            <div className="cont-cardgr">
                                <div className="card" style={{ backgroundImage: 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2dfe33e-32e3-41b7-b62c-96985dd07256/ddqgbel-4966b57e-8ece-4b9e-9bfb-24c5a640b664.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyZGZlMzNlLTMyZTMtNDFiNy1iNjJjLTk2OTg1ZGQwNzI1NlwvZGRxZ2JlbC00OTY2YjU3ZS04ZWNlLTRiOWUtOWJmYi0yNGM1YTY0MGI2NjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aJQ9fk9-siEIHnugL3GVwytfEMdR5EhJ0p7X9v5-InY")' }}>
                                    <div>
                                        <p></p>
                                        <p className="calificacion">1</p>
                                    </div>
                                    <p className="nombre">SUNFLOWER TRANSLATIONS</p>
                                </div>
                            </div>

                            <div className="cont-cardgr">
                                <div className="card" style={{ backgroundImage: 'url("https://img1.japanreader.com/images/groups/logo/6111f7e3c74b0.webp")' }}>
                                    <div>
                                        <p></p>
                                        <p className="calificacion">2</p>
                                    </div>
                                    <p className="nombre">BAKAGUYA SCANLATION</p>
                                </div>
                            </div>

                            <div className="cont-cardgr">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">3</p>
                                    </div>
                                    <p className="nombre">RAKUEN TRANSLATIONS</p>
                                </div>
                            </div>

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
                                series?.map(serie => {
                                    return (
                                        <Link to={routes.manga + `/${serie.serie_uid}/${reemplazarEspaciosConGuiones(serie.nombre.toLowerCase())}`} className="cont-card">
                                            <div className="card" style={{
                                                backgroundImage: `url("${serie.portada}")`
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
                                series?.map(serie => {
                                    return (
                                        <Link to={routes.manga + `/${serie.serie_uid}/${reemplazarEspaciosConGuiones(serie.nombre.toLowerCase())}`} className="cont-card">
                                            <div className="card" style={{
                                                backgroundImage: `url("${serie.portada}")`
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