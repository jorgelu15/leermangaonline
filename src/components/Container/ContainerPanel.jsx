
import { useState } from "react"
import React, { useRef } from 'react';

import TableMiembros from "../Mui/Tables/TableMiembros"

import scan from "../../img/gruposcan.png"
import PanelMiembros from "./Panel/PanelMiembros";

import panelC from "../../img/tachometer-alt-solid.svg"
import libroP from "../../img/book-solid.svg"
import miembros from "../../img/users-solid.svg"
import personas from "../../img/user-group-solid.svg"
import registro from "../../img/file-lines-solid.svg"
import config from "../../img/user-gear-solid.svg"


const ContainerPanel = (props) => {

    return (
        <div className="content-panel">
            <div className="menu-panel">
                <div className="perfil-menu">
                    <p className="nombre">DGDAVID2</p>
                    <p className="rol">Admin</p>
                </div>
                <div className="lista">
                    <p>MENU</p>
                    <ul>
                        <li><img src={panelC} /><a href="#">Panel de control</a></li>
                        <li><img src={libroP} /><a href="#">Proyectos</a></li>
                        <li><img src={miembros}/><a href="#">Miembros</a></li>
                        <li><img src={personas} /><a href="#">Joints</a></li>
                        <li><img src={registro} /><a href="#">Registro</a></li>
                        <li><img src={config} /><a href="#">Informacion</a></li>
                    </ul>
                </div>
            </div>
            <main className="cont-panel">
                <div className="filtro">

                    <div className="portada-scan">
                        <div className="scan">
                            <img src={scan}/>
                            <div>
                                <p className="titulo">LATTE CHOCO</p>
                                <p className="descripcion">Somos un scan que se decica a la traduccion de mangas que fueron abandonados por otros scan.</p>
                            </div>
                        </div>
                        <div className="estado">
                            <div>
                                <p className="titulo">Estado del Grupo</p>
                                <p>Activo</p>
                            </div>
                            <div>
                                <p className="titulo">Fecha de Creacion</p>
                                <p>16/10/2023</p>
                            </div>
                        </div>
                    </div>

                    <PanelMiembros/>

                </div>
            </main>
        </div>  
    )
}

export default ContainerPanel;