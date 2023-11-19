
import { useContext, useState } from "react"
import React, { useRef } from 'react';


import scan from "../../img/gruposcan.png"
import PanelSolicitudes from "./Panel/PanelSolicitudes";
import PanelMiembros from "./Panel/PanelMiembros";

import panelC from "../../img/tachometer-alt-solid.svg"
import libroP from "../../img/book-solid.svg"
import miembros from "../../img/users-solid.svg"
import personas from "../../img/user-group-solid.svg"
import registro from "../../img/file-lines-solid.svg"
import config from "../../img/user-gear-solid.svg"

import useAuth from "../../hooks/useAuth";
import gruposContext from "../../context/grupos/gruposContext";
import PanelControl from "./Panel/PanelControl";



const ContainerPanel = (props) => {

    const { usuario } = useAuth();
    const { grupo, solicitudes } = useContext(gruposContext)

    const { autenticado, usuarioAutenticado } = useAuth();

    const [ panel, setPanel ] = useState(1)


    const handleChangePl = (pag) => {
        setPanel(pag)
    }

    return (
        <div className="content-panel">
            <div className="menu-panel">
                <div className="perfil-menu">
                    <p className="nombre">{usuario?.usuario}</p>
                    <p className="rol">Admin</p>
                </div>
                <div className="lista">
                    <p>MENU</p>
                    <ul>
                        <li className={panel == 1 ? 'active' : ''} onClick={() => handleChangePl(1)}>
                            <img src={panelC}/><a>Panel de control</a>
                        </li>
                        <li className={panel == 2 ? 'active' : ''} onClick={() => handleChangePl(2)}>
                            <img src={libroP} /><a>Proyectos</a>
                        </li>
                        <li className={panel == 3 ? 'active' : ''} onClick={() => handleChangePl(3)}>
                            <img src={miembros}/><a>Miembros</a>
                        </li>
                        <li className={panel == 4 ? 'active' : ''} onClick={() => handleChangePl(4)}>
                            <img src={personas} /><a>Solicitudes</a>
                        </li>
                        <li className={panel == 5 ? 'active' : ''} onClick={() => handleChangePl(5)}>
                            <img src={registro} /><a>Registro</a>
                        </li>
                        <li className={panel == 6 ? 'active' : ''} onClick={() => handleChangePl(6)}>
                            <img src={config} /><a>Informacion</a>
                        </li>
                    </ul>
                </div>
            </div>
            <main className="cont-panel">
                <div className="filtro">

                    <div className="portada-scan">
                        <div className="scan">
                            <img src={scan}/>
                            <div>
                                <p className="titulo">{grupo?.nombre}</p>
                                <p className="descripcion">{grupo?.descripcion}</p>
                            </div>
                        </div>
                        <div className="estado">
                            <div>
                                <p className="titulo">Estado del Grupo</p>
                                <p>{grupo?.estado ? 'Activo' : 'Inactivo'}</p>
                            </div>
                            <div>
                                <p className="titulo">Fecha de Creacion</p>
                                <p>16/10/2023</p>
                            </div>
                        </div>
                    </div>

                    { panel == 1 && (<PanelControl/>) }
                    { panel == 3 && (<PanelMiembros/>) }
                    { panel == 4 && (<PanelSolicitudes/>) }

                </div>
            </main>
        </div>  
    )
}

export default ContainerPanel;