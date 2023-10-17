
import { useState } from "react"
import React, { useRef } from 'react';
import Slider from "./Slider";

import isugo from "../../img/isugodibujo.png"
import stafs from "../../img/buscastafs.jpg"
import chatej from "../../img/chatmanga.png"
import joindc from "../../img/joindc.png"

import TabsHome from "../Mui/Tabs/TabsHome";
import TabsTop from "../Mui/Tabs/TabsTop";


const ContainerHome = (props) => {

    const items = {
        tabs: 3,
        cont: [
            {
                tab: "Mangas",
                cards: [
                    {nombre: "jujutsu Kaisen", categoria: "manga", calif: "8.53", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.jpg"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "9.05", url: "https://otakuteca.com/images/books/cover/5efe4afd1d0c5.jpg"},
                    {nombre: "Kanojo, Okarishimasu", categoria: "manga", calif: "3.91", url: "https://otakuteca.com/images/books/cover/606cda6f538c7.jpg"},
                    {nombre: "Class de 2 Banme ni...", categoria: "manga", calif: "8.40", url: "https://otakuteca.com/images/books/cover/62e1dbb29f444.jpg"},
                    {nombre: "Kanan-sama Might be...", categoria: "manga", calif: "8.92", url: "https://otakuteca.com/images/books/cover/629634d78ab1c.jpg"},
                    {nombre: "Senshitibu boi", categoria: "manga", calif: "7.38", url: "https://otakuteca.com/images/books/cover/646dff10a1fa2.jpg"},
                    {nombre: "El mundo paralelo con...", categoria: "manga", calif: "7.50", url: "https://otakuteca.com/images/books/cover/65010240f0a56.jpg"},
                    {nombre: "KINGDOW", categoria: "manga", calif: "9.59", url: "https://otakuteca.com/images/books/cover/5bc121ab8e186.jpg"},
                    {nombre: "Isekai Ship Summoning", categoria: "manga", calif: "9.00", url: "https://otakuteca.com/images/books/cover/61708df723eda.jpg"},
                    {nombre: "Yuusha Shoukan ni Ma", categoria: "manga", calif: "8.54", url: "https://otakuteca.com/images/books/cover/5dbfb96f1ef61.jpg"},
                    {nombre: "Isekai Shoukan wa", categoria: "manga", calif: "6.17", url: "https://otakuteca.com/images/books/cover/63813864eafb7.jpg"},
                    {nombre: "Kagurabachi", categoria: "manga", calif: "6.71", url: "https://otakuteca.com/images/books/cover/65076987c0141.jpg"},
                    
                    
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

                    <TabsHome items={items}></TabsHome>
                    <TabsHome items={items}></TabsHome>
                    <TabsHome items={items}></TabsHome>

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