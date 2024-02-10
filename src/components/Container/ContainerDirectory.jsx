import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';

import useAuth from "../../hooks/useAuth";
import gruposContext from "../../context/grupos/gruposContext";

import SearchDirectory from "../Search/SearchDirectory";
import CardDirectory from "../Card/CardDirectory";
import TabsTop from "../Mui/Tabs/TabsTop";
import FormFilter from "../Form/FormFilter";
import directorioContext from "../../context/directorio/directorioContext";

const cards = [
    { nombre: "jujutsu Kaisen", categoria: "Manga", calif: "8.53", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.webp" },
    { nombre: "oshi no ko", categoria: "Manga", calif: "9.05", url: "https://otakuteca.com/images/books/cover/5efe4afd1d0c5.webp" },
    { nombre: "Kanojo, Okarishimasu", categoria: "Manga", calif: "3.91", url: "https://otakuteca.com/images/books/cover/606cda6f538c7.webp" },
    { nombre: "Class de 2 Banme ni...", categoria: "Manga", calif: "8.40", url: "https://otakuteca.com/images/books/cover/62e1dbb29f444.webp" },
    { nombre: "Kanan-sama Might be...", categoria: "Manga", calif: "8.92", url: "https://otakuteca.com/images/books/cover/629634d78ab1c.webp" },
    { nombre: "Senshitibu boi", categoria: "Manga", calif: "7.38", url: "https://otakuteca.com/images/books/cover/646dff10a1fa2.webp" },
    { nombre: "El mundo paralelo con...", categoria: "Manga", calif: "7.50", url: "https://otakuteca.com/images/books/cover/65010240f0a56.webp" },
    { nombre: "KINGDOW", categoria: "Manga", calif: "9.59", url: "https://otakuteca.com/images/books/cover/5bc121ab8e186.webp" },
    { nombre: "Isekai Ship Summoning", categoria: "Manga", calif: "9.00", url: "https://otakuteca.com/images/books/cover/61708df723eda.webp" },
    { nombre: "Yuusha Shoukan ni Ma", categoria: "Manga", calif: "8.54", url: "https://otakuteca.com/images/books/cover/5dbfb96f1ef61.webp" },
    { nombre: "Isekai Shoukan wa", categoria: "Manga", calif: "6.17", url: "https://otakuteca.com/images/books/cover/63813864eafb7.webp" },
    { nombre: "Kagurabachi", categoria: "Manga", calif: "6.71", url: "https://otakuteca.com/images/books/cover/65076987c0141.webp" },

]

const items_tp = {
    tabs: 2,
    cont: [
        {
            tab: "Top Semanal",
            cards: [
                {nombre: "One piece", categoria: "manga", calif: "1", url: "https://otakuteca.com/images/books/cover/615b37c54415c.webp"},
                {nombre: "Jujutsu kaisen", categoria: "manga", calif: "2", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.webp"},
                {nombre: "Solo leveling", categoria: "manhwa", calif: "3", url: "https://otakuteca.com/images/books/cover/5c2efcd42cd5e.webp"},
                {nombre: "Bersek", categoria: "manga", calif: "4", url: "https://otakuteca.com/images/books/cover/5bc80d3ce44c3.webp"},
                {nombre: "Naruto", categoria: "manga", calif: "5", url: "https://otakuteca.com/images/books/cover/617ebf11e0cdf.webp"},
            ]
        },
        {
            tab: "Top Mensual",
            cards: [
                {nombre: "One piece", categoria: "manga", calif: "1", url: "https://otakuteca.com/images/books/cover/615b37c54415c.webp"},
                {nombre: "Solo leveling", categoria: "manhwa", calif: "2", url: "https://otakuteca.com/images/books/cover/5c2efcd42cd5e.webp"},
                {nombre: "Jujutsu kaisen", categoria: "manga", calif: "3", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.webp"},
                {nombre: "Kimetsu no yaiba", categoria: "manga", calif: "4", url: "	https://otakuteca.com/images/books/cover/6347011a463ea.webp"},
                {nombre: "Naruto", categoria: "manga", calif: "5", url: "https://otakuteca.com/images/books/cover/617ebf11e0cdf.webp"},
            ]
        }
    ]
}

const ContainerDirectory = (props) => {

    const { usuario } = useAuth();
    const { grupos, getAllGrupos } = useContext(gruposContext)

    const { filtrados } = useContext(directorioContext);

    useEffect(() => {
        getAllGrupos()
    }, [])

    const scans = [
        { nombre: 'KigdomScan', nmembers: 20, id: 0 },
        { nombre: 'Spain Traductions', nmembers: 17, id: 1 },
        { nombre: 'ComeScan', nmembers: 10, id: 2 },
        { nombre: 'NoxionScanner', nmembers: 5, id: 3 },
        { nombre: 'Letan Traductions', nmembers: 35, id: 4 },
        { nombre: 'BluePhoenix Translations', nmembers: 31, id: 5 },
        { nombre: 'RxNonstop Translations', nmembers: 27, id: 6 },
        { nombre: 'Darkskin Scanner', nmembers: 16, id: 7 }
    ]

    return (
        <div className="scan-groups">

            <aside className="filter">
                <div className="title">
                    <h3>Directorio</h3>
                </div>
                <section className="sec-filter">
                    <FormFilter/>
                </section>
            </aside>
            
            <main className="main-home">
                <SearchDirectory />
                <div className="groups">
                    <CardDirectory cards={filtrados} />
                </div>
            </main>
        </div>
    )
}

export default ContainerDirectory;