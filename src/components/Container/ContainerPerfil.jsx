import * as React from 'react';
import { useState } from "react"
// import React, { useRef } from 'react';

import FotoPerfil from "../../img/perfil1.jpg"
import TabsCategory from "../Mui/Tabs/TabsCategory"
import FormPerfil from "../Form/FormPerfil";
import { useAuth } from "../../hooks/useAuth";

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const ContainerPerfil = (props) => {

    const { usuario } = useAuth();

    const [viewPerfil, setViewPerfil] = useState(true)

    const changeViewPr = () => {
        setViewPerfil(!viewPerfil)
    }

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

    return (
        <div className="cont-perfil">
            <div className="perfil-port">
                <div className="background"></div>
                <div className="wallpaper"></div>
                <div className="cont-portada">

                    <div className="img">
                        {/* <Avatar sx={{ width: 200, height: 200 }}></Avatar> */}
                        <Avatar src={import.meta.env.VITE_BASE_URL_IMAGES + '/uploads/avatar/' + usuario.avatar} sx={{ width: 200, height: 200 }}></Avatar>
                        {/* <img src={FotoPerfil} alt="" /> */}
                    </div>

                    <div className="info">
                        <p className="username">
                            <span>{usuario?.usuario}</span>
                            <a className={`${viewPerfil ? 'btn-pf-active' : null} btn-perfil`} onClick={() => { changeViewPr() }}>Ver Perfil</a>
                        </p>
                        <div className="etiq-cards">
                            <div className="card">Masculino</div>
                            <div className="card">2023-04-11</div>
                            <div className="card">Colombia</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${viewPerfil ? 'hidden-indicator' : null}`}>
                <TabsCategory items={items} viewPerfil={viewPerfil} setViewPerfil={setViewPerfil}></TabsCategory>
            </div>

            <div className="cont-perfil-info">
                {viewPerfil ? <FormPerfil /> : null}
            </div>
        </div>
    )
}

export default ContainerPerfil;