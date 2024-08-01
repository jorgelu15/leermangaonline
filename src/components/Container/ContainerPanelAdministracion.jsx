
import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';


import scan from "../../img/gruposcan.png"
import PanelSolicitudes from "./Panel/PanelSolicitudes";
import PanelMiembros from "./Panel/PanelMiembros";

import panelC from "../../img/tachometer-alt-solid.svg"
import capP from "../../img/panel/icon-caps.svg";
import carousel from "../../img/panel/icon-carousel.svg";

import libroP from "../../img/book-solid.svg"
import iconNews from "../../img/panel/icon-news.svg"
import personas from "../../img/user-group-solid.svg"
import registro from "../../img/file-lines-solid.svg"
import config from "../../img/user-gear-solid.svg"

import gruposContext from "../../context/grupos/gruposContext";


import { Link, useParams } from "react-router-dom";
import { useGrupos } from "../../hooks/useGrupos";
import { useAuth } from "../../hooks/useAuth";
import PanelInformacion from "./Panel/PanelInformacion";
import PanelSeries from "./PanelAdministacion/PanelSeries";
import PanelCapitulos from "./PanelAdministacion/PanelCapitulos";
import PanelCarousel from "./PanelAdministacion/PanelCarousel";
import PanelGrupos from "./PanelAdministacion/PanelGrupos";


const ContainerPanelAdministracion = (props) => {

    const { usuario } = useAuth();
    const { proyectos, miembros, getMiembros, getProyectos } = useGrupos();
    const { grupo, solicitudes, getGrupo, getSolicitudes } = useContext(gruposContext)

    let { id } = useParams();

    useEffect(() => {
        if (!proyectos) {
            getProyectos(id);
        }
    }, [proyectos, id]);

    useEffect(() => {
        if (!miembros) {
            getMiembros(id);
        }
    }, [miembros, id]);

    useEffect(() => {
        if (!grupo) {
            getGrupo(id);
        }
    }, []);

    useEffect(() => {
        if (grupo) {
            getSolicitudes(grupo.id);
        }
    }, [grupo]);


    const [panel, setPanel] = useState(1)


    const handleChangePl = (pag) => {
        setPanel(pag)
    }

    return (
        <div className="content-panel">
            <div className="menu-panel">
                <div className="perfil-menu">
                    <p className="nombre">{grupo?.nombre}</p>
                    <p style={{textTransform: "capitalize"}}>{usuario?.usuario} - Administrador</p>
                </div>
                <div className="lista">
                    <p>MENU</p>
                    <ul>
                        <li className={panel == 1 ? 'active' : ''} onClick={() => handleChangePl(1)}>
                            <img  src={libroP} /><a>Series</a>
                        </li>
                        <li className={panel == 2 ? 'active' : ''} onClick={() => handleChangePl(2)}>
                            <img  src={capP} /><a>Capitulos</a>
                        </li>
                        <li className={panel == 3 ? 'active' : ''} onClick={() => handleChangePl(3)}>
                            <img  src={carousel} /><a>Carousel</a>
                        </li>
                        <li className={panel == 4 ? 'active' : ''} onClick={() => handleChangePl(4)}>
                            <img  src={personas} /><a>Grupos</a>
                        </li>
                        <li className={panel == 5 ? 'active' : ''} onClick={() => handleChangePl(5)}>
                            <img  src={iconNews} /><a>Noticias</a>
                        </li>
                    </ul>
                </div>
            </div>
            <main className="cont-panel">
                <div className="filtro">
                    {panel == 1 && (<PanelSeries />)}
                    {panel == 2 && (<PanelCapitulos />)}
                    {panel == 3 && (<PanelCarousel />)}
                    {panel == 4 && (<PanelGrupos />)}

                </div>
            </main>
        </div>
    )
}

export default ContainerPanelAdministracion;