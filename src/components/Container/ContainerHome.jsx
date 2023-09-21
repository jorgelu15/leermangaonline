
import { useState } from "react"
import React, { useRef } from 'react';
import Slider from "./Slider";

import isugo from "../../img/isugodibujo.png"
import stafs from "../../img/buscastafs.jpg"
import chatej from "../../img/chatmanga.png"
import joindc from "../../img/joindc.png"

import BasicTabs from "../Tabs/BasicTabs";
import TabsTop from "../Tabs/TabsTop";


const ContainerHome = (props) => {

    const items = {
        tabs: 3,
        cont: [
            {
                tab: "Mangas",
                cards: [
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                ]
            },
            {
                tab: "P.Manwas",
                cards: [
                    {nombre: "jujutsu", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"}
                ]
            },
            {
                tab: "P.Manhuas",
                cards: [
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"}
                ]
            }
        ]
    }

    const items_tp = {
        tabs: 2,
        cont: [
            {
                tab: "Top Semanal",
                cards: [
                    {nombre: "oshi no ko", categoria: "manga", calif: "1", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "2", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "3", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "4", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "5", url: "img"},
                ]
            },
            {
                tab: "Top Mensual",
                cards: [
                    {nombre: "jujutsu", categoria: "manga", calif: "1", url: "img"},
                    {nombre: "jujutsu", categoria: "manga", calif: "2", url: "img"},
                    {nombre: "jujutsu", categoria: "manga", calif: "3", url: "img"},
                    {nombre: "jujutsu", categoria: "manga", calif: "4", url: "img"},
                    {nombre: "jujutsu", categoria: "manga", calif: "5", url: "img"},
                ]
            }
        ]
    }

    return (
        <div>
            <Slider></Slider>
            <div className="home-mng">
                <main className="main-home">

                    <BasicTabs items={items}></BasicTabs>
                    <BasicTabs items={items}></BasicTabs>
                    <BasicTabs items={items}></BasicTabs>

                    <section className="sec-grupos">
                        <h2>Los mejores scan/grupos del mes</h2>
                        <div className="sec-cards">

                            <div className="cont-cardgr">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">1</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>
                            
                            <div className="cont-cardgr">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">1</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-cardgr">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">1</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="sec-noticias">
                        <h2>Ultimas Noticias</h2>
                        
                        <div className="cards">
                            <div className="card">
                                <img src={stafs}/>
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
                                <img src={stafs}/>
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
                        </div>
                    </section>

                    <section className="sec-subidos">
                        
                        <h2>Ultimos Subidos</h2>
                        <div className="sec-cards">
                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>
                            
                        </div>

                    </section>

                    <section className="sec-subidos">
                        
                        <h2>Tendencias</h2>
                        <div className="sec-cards">
                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>

                            <div className="cont-card">
                                <div className="card">
                                    <div>
                                        <p></p>
                                        <p className="calificacion">8.0</p>
                                    </div>
                                    <p className="nombre">OSHI NO KO</p>
                                </div>
                            </div>
                            
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
                            <img src={isugo}/>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    )
}

export default ContainerHome;