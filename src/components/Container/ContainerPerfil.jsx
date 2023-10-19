import * as React from 'react';
import { useState } from "react"
// import React, { useRef } from 'react';

import FotoPerfil from "../../img/perfil1.jpg"
import TabsCategory from "../Mui/Tabs/TabsCategory"
import FormPerfil from "../Form/FormPerfil";
import useAuth from "../../hooks/useAuth";

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const ContainerPerfil = (props) => {

    const { usuario } = useAuth();

    const [ viewPerfil, setViewPerfil ] = useState(false)

    const changeViewPr = () => {
        setViewPerfil(!viewPerfil)
    }

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
                        {/* <Avatar sx={{ width: 200, height: 200 }}></Avatar> */}
                        <Avatar src={FotoPerfil} sx={{ width: 200, height: 200 }}></Avatar>
                        {/* <img src={FotoPerfil} alt="" /> */}
                    </div>

                    <div className="info">
                        <p className="username">
                            <span>{usuario?.usuario}</span>
                            <a className={`${viewPerfil ? 'btn-pf-active' : null} btn-perfil`} onClick={()=>{changeViewPr()}}>Ver Perfil</a>
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
                { viewPerfil ? <FormPerfil/> : null }
            </div>
        </div>
    )
}

export default ContainerPerfil;