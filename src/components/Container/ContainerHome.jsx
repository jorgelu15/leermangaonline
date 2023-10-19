
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
                    {nombre: "jujutsu Kaisen", categoria: "Manga", calif: "8.53", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.jpg"},
                    {nombre: "oshi no ko", categoria: "Manga", calif: "9.05", url: "https://otakuteca.com/images/books/cover/5efe4afd1d0c5.jpg"},
                    {nombre: "Kanojo, Okarishimasu", categoria: "Manga", calif: "3.91", url: "https://otakuteca.com/images/books/cover/606cda6f538c7.jpg"},
                    {nombre: "Class de 2 Banme ni...", categoria: "Manga", calif: "8.40", url: "https://otakuteca.com/images/books/cover/62e1dbb29f444.jpg"},
                    {nombre: "Kanan-sama Might be...", categoria: "Manga", calif: "8.92", url: "https://otakuteca.com/images/books/cover/629634d78ab1c.jpg"},
                    {nombre: "Senshitibu boi", categoria: "Manga", calif: "7.38", url: "https://otakuteca.com/images/books/cover/646dff10a1fa2.jpg"},
                    {nombre: "El mundo paralelo con...", categoria: "Manga", calif: "7.50", url: "https://otakuteca.com/images/books/cover/65010240f0a56.jpg"},
                    {nombre: "KINGDOW", categoria: "Manga", calif: "9.59", url: "https://otakuteca.com/images/books/cover/5bc121ab8e186.jpg"},
                    {nombre: "Isekai Ship Summoning", categoria: "Manga", calif: "9.00", url: "https://otakuteca.com/images/books/cover/61708df723eda.jpg"},
                    {nombre: "Yuusha Shoukan ni Ma", categoria: "Manga", calif: "8.54", url: "https://otakuteca.com/images/books/cover/5dbfb96f1ef61.jpg"},
                    {nombre: "Isekai Shoukan wa", categoria: "Manga", calif: "6.17", url: "https://otakuteca.com/images/books/cover/63813864eafb7.jpg"},
                    {nombre: "Kagurabachi", categoria: "Manga", calif: "6.71", url: "https://otakuteca.com/images/books/cover/65076987c0141.jpg"},
                    
                ]
            },
            {
                tab: "P.Manhwas",
                cards: [
                    {nombre: "Solo leveling", categoria: "manhwa", calif: "9.13", url: "https://otakuteca.com/images/books/cover/5c2efcd42cd5e.jpg"},
                    {nombre: "Maldita reencarnación", categoria: "manhwa", calif: "9.75", url: "https://otakuteca.com/images/books/cover/62b33f5a5c0f5.jpg"},
                    {nombre: "Registros de supervivenc...", categoria: "manhwa", calif: "8.78", url: "https://otakuteca.com/images/books/cover/61fbb5bf02e45.jpg"},
                    {nombre: "El dios de la escuela se...", categoria: "manhwa", calif: "8.78", url: "https://otakuteca.com/images/books/cover/5d3df9c5378b5.jpg"},
                    {nombre: "La vida despues de la muerte", categoria: "manhwa", calif: "8.89", url: "https://otakuteca.com/images/books/cover/5ddde8a92558c.jpg"},
                    {nombre: "Guerrero de nivelacion ha...", categoria: "manhwa", calif: "10.00", url: "https://otakuteca.com/images/books/cover/645feeabbf6ae.jpg"}
                ]
            },
            {
                tab: "P.Manhuas",
                cards: [
                    {nombre: "La era del gran diluvio", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/642cb67221a43.jpg"},
                    {nombre: "Song of the skywalkers", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/5d5fd8924ecb7.jpg"},
                    {nombre: "Super human era", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/5fe9c73717852.jpg"},
                    {nombre: "Mis discipulas son todas in...", categoria: "manhua", calif: "7.71", url: "https://otakuteca.com/images/books/cover/5fbb1b741ba61.jpg"},
                    {nombre: "Comienzo de la era humana", categoria: "manhua", calif: "0.00", url: "https://otakuteca.com/images/books/cover/5f4ad3371b22a.jpg"},
                    {nombre: "¿Mi esposa es en realidad ...", categoria: "manhua", calif: "7.50", url: "https://otakuteca.com/images/books/cover/602a535b9f308.jpg"}
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
                    {nombre: "One piece", categoria: "manga", calif: "1", url: "https://otakuteca.com/images/books/cover/615b37c54415c.jpg"},
                    {nombre: "Jujutsu kaisen", categoria: "manga", calif: "2", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.jpg"},
                    {nombre: "Solo leveling", categoria: "manhwa", calif: "3", url: "https://otakuteca.com/images/books/cover/5c2efcd42cd5e.jpg"},
                    {nombre: "Bersek", categoria: "manga", calif: "4", url: "https://otakuteca.com/images/books/cover/5bc80d3ce44c3.jpg"},
                    {nombre: "Naruto", categoria: "manga", calif: "5", url: "https://otakuteca.com/images/books/cover/617ebf11e0cdf.jpg"},
                ]
            },
            {
                tab: "Top Mensual",
                cards: [
                    {nombre: "One piece", categoria: "manga", calif: "1", url: "https://otakuteca.com/images/books/cover/615b37c54415c.jpg"},
                    {nombre: "Solo leveling", categoria: "manhwa", calif: "2", url: "https://otakuteca.com/images/books/cover/5c2efcd42cd5e.jpg"},
                    {nombre: "Jujutsu kaisen", categoria: "manga", calif: "3", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.jpg"},
                    {nombre: "Kimetsu no yaiba", categoria: "manga", calif: "4", url: "	https://otakuteca.com/images/books/cover/6347011a463ea.jpg"},
                    {nombre: "Naruto", categoria: "manga", calif: "5", url: "https://otakuteca.com/images/books/cover/617ebf11e0cdf.jpg"},
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
                                <div className="card" style={{backgroundImage: 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2dfe33e-32e3-41b7-b62c-96985dd07256/ddqgbel-4966b57e-8ece-4b9e-9bfb-24c5a640b664.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyZGZlMzNlLTMyZTMtNDFiNy1iNjJjLTk2OTg1ZGQwNzI1NlwvZGRxZ2JlbC00OTY2YjU3ZS04ZWNlLTRiOWUtOWJmYi0yNGM1YTY0MGI2NjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aJQ9fk9-siEIHnugL3GVwytfEMdR5EhJ0p7X9v5-InY")'}}>
                                    <div>
                                        <p></p>
                                        <p className="calificacion">1</p>
                                    </div>
                                    <p className="nombre">SUNFLOWER TRANSLATIONS</p>
                                </div>
                            </div>
                            
                            <div className="cont-cardgr">
                                <div className="card" style={{backgroundImage:'url(https://scontent.fctg3-1.fna.fbcdn.net/v/t39.30808-6/312722438_218464947180693_3085361177638632951_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGcV0ksLYhdrbULqiVcTzSx-b-i0mp2Uwz5v6LSanZTDOhB-qwqSoHB5jC23-Tq5EVwY6DSg9jvvE7rDbN2sBwk&_nc_ohc=CUWXI1gZaqQAX8nhnm7&_nc_ht=scontent.fctg3-1.fna&oh=00_AfBHDerXco8id1VvSwXjIHD5qSOZXoTE_Ti9txjQco2cMQ&oe=6535BDDA)'}}>
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
                                        <p className="calificacion">1</p>
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
                                <img src="https://www.geekmi.news/__export/1665685634810/sites/debate/img/2022/10/13/makima3.jpg_423682103.jpg"/>
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