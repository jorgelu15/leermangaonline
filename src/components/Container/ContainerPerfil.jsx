
import { useState } from "react"
import React, { useRef } from 'react';

import FotoPerfil from "../../img/fotoperfil.jpg"
import TabsCategory from "../Tabs/TabsCategory"

const ContainerPerfil = (props) => {

    const items = {
        tabs: 5,
        cont: [
            {
                tab: "Leido",
                cards: [
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                ]
            },
            {
                tab: "Pendiente",
                cards: [
                    {nombre: "jujutsu", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"}
                ]
            },
            {
                tab: "Siguiendo",
                cards: [
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"}
                ]
            },
            {
                tab: "Favorito",
                cards: [
                    {nombre: "jujutsu", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"}
                ]
            },
            {
                tab: "Abandonado",
                cards: [
                ]
            },
        ]
    }

    return (
        <div className="cont-perfil">
            <div className="perfil-port">
                <div className="background"></div>
                <div className="wallpaper"></div>
                <div className="cont-portada">

                    <div className="img">
                        <img src={FotoPerfil} alt="" />
                    </div>

                    <div className="info">
                        <p className="username">dgdavid2 <a className="btn-perfil" href="#">Editar perfil</a></p>
                        <div className="etiq-cards">
                            <div className="card">Masculino</div>
                            <div className="card">2023-04-11</div>
                            <div className="card">Colombia</div>
                        </div>
                    </div>
                </div>
            </div>

            <TabsCategory items={items}></TabsCategory>

            
        </div>
    )
}

export default ContainerPerfil;