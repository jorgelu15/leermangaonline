
import { useState } from "react"
import React, { useRef } from 'react';
import Slider from "./Slider";

import isugo from "../../img/isugodibujo.png"
import stafs from "../../img/buscastafs.jpg"
import chatej from "../../img/chatmanga.png"
import joindc from "../../img/joindc.png"


const Container = (props) => {

    return (
        <div>
            <Slider></Slider>
            <div className="home-mng">
                <main className="main-home">
                    <section className="sec-categoria">
                        <div className="sec-menu">
                            <ul>
                                <li className="cat-active">Mangas</li>
                                <li>P.Manwas</li>
                                <li>P.Manhuas</li>
                            </ul>
                        </div>
                        <div className="sec-cards">
                            {
                                new Array(5).fill("").map((item, idx) => (
                                    <div className="card" key={idx}>
                                        <div>
                                            <p className="categoria">Manga</p>
                                            <p className="calificacion">8.0</p>
                                        </div>
                                        <p className="nombre">OSHI NO KO</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                    <section className="sec-categoria">
                        <div className="sec-menu">
                            <ul>
                                <li className="cat-active">Populares</li>
                                <li>P.Seinen</li>
                                <li>P.Josei</li>
                            </ul>
                        </div>
                        <div className="sec-cards">
                            {
                                new Array(5).fill("").map((item, idx) => (
                                    <div className="card">
                                        <div>
                                            <p className="categoria">Manga</p>
                                            <p className="calificacion">8.0</p>
                                        </div>
                                        <p className="nombre">OSHI NO KO</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                    <section className="sec-categoria">
                        <div className="sec-menu">
                            <ul>
                                <li className="cat-active">Leido</li>
                                <li>Pendiente</li>
                                <li>Favorito</li>
                            </ul>
                        </div>
                        <div className="sec-cards">
                            {
                                new Array(5).fill("").map((item, idx) => (
                                    <div className="card">
                                        <div>
                                            <p className="categoria">Manga</p>
                                            <p className="calificacion">8.0</p>
                                        </div>
                                        <p className="nombre">OSHI NO KO</p>
                                    </div>
                                ))
                            }

                        </div>
                    </section>

                    <section className="sec-grupos">
                        <h2>Los mejores scan/grupos del mes</h2>
                        <div className="sec-cards">
                            {
                                new Array(3).fill("").map((item, idx) => (
                                    <div className="card" key={idx}>
                                        <div>
                                            <p></p>
                                            <p className="calificacion">8.0</p>
                                        </div>
                                        <p className="nombre">OSHI NO KO</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                    <section className="sec-noticias">
                        <h2>Ultimas Noticias</h2>

                        <div className="cards">
                            {
                                new Array(2).fill("").map((item, idx) => (
                                    <div className="card" key={idx}>
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
                                ))
                            }
                        </div>
                    </section>

                    <section className="sec-subidos">

                        <h2>Ultimos Subidos</h2>
                        <div className="sec-cards">
                            {
                                new Array(12).fill("").map((item, idx) => (
                                    <div className="card" key={idx}>
                                        <div>
                                            <p className="categoria">Manga</p>
                                            <p className="calificacion">8.0</p>
                                        </div>
                                        <p className="nombre">OSHI NO KO</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                    <section className="sec-subidos">

                        <h2>Tendencias</h2>
                        <div className="sec-cards">
                            {
                                new Array(6).fill("").map((item, idx) => (
                                    <div className="card" key={idx}>
                                        <div>
                                            <p className="categoria">Manga</p>
                                            <p className="calificacion">8.0</p>
                                        </div>
                                        <p className="nombre">OSHI NO KO</p>
                                    </div>
                                ))
                            }

                        </div>

                        <div className="sec-cards">
                            <div className="card">
                                <div>
                                    <p className="categoria">Manga</p>
                                    <p className="calificacion">8.0</p>
                                </div>
                                <p className="nombre">OSHI NO KO</p>
                            </div>

                            <div className="card">
                                <div>
                                    <p className="categoria">Manga</p>
                                    <p className="calificacion">8.0</p>
                                </div>
                                <p className="nombre">OSHI NO KO</p>
                            </div>

                            <div className="card">
                                <div>
                                    <p className="categoria">Manga</p>
                                    <p className="calificacion">8.0</p>
                                </div>
                                <p className="nombre">OSHI NO KO</p>
                            </div>

                            <div className="card">
                                <div>
                                    <p className="categoria">Manga</p>
                                    <p className="calificacion">8.0</p>
                                </div>
                                <p className="nombre">OSHI NO KO</p>
                            </div>

                            <div className="card">
                                <div>
                                    <p className="categoria">Manga</p>
                                    <p className="calificacion">8.0</p>
                                </div>
                                <p className="nombre">OSHI NO KO</p>
                            </div>

                            <div className="card">
                                <div>
                                    <p className="categoria">Manga</p>
                                    <p className="calificacion">8.0</p>
                                </div>
                                <p className="nombre">OSHI NO KO</p>
                            </div>

                        </div>
                    </section>
                </main>

                <aside className="aside-home">
                    <section className="sec-tops">

                        <div className="cont-semanal">
                            <h3>Top Semanal</h3>

                            <div className="cards">
                                <div className="card">
                                    <div className="cont-img">
                                        <p>1</p>
                                    </div>
                                    <div className="info">
                                        <p className="nombre">[OSHI NO KO]</p>
                                        <p className="categoria">Manga</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="card">
                                    <div className="cont-img">
                                        <p>2</p>
                                    </div>
                                    <div className="info">
                                        <p className="nombre">[OSHI NO KO]</p>
                                        <p className="categoria">Manga</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="card">
                                    <div className="cont-img">
                                        <p>3</p>
                                    </div>
                                    <div className="info">
                                        <p className="nombre">[OSHI NO KO]</p>
                                        <p className="categoria">Manga</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="card">
                                    <div className="cont-img">
                                        <p>4</p>
                                    </div>
                                    <div className="info">
                                        <p className="nombre">[OSHI NO KO]</p>
                                        <p className="categoria">Manga</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cont-mensual">
                            <h3>Top Mensual</h3>

                            <div className="cards">
                                <div className="card">
                                    <div className="cont-img">
                                        <p>1</p>
                                    </div>
                                    <div className="info">
                                        <p className="nombre">[OSHI NO KO]</p>
                                        <p className="categoria">Manga</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Container;