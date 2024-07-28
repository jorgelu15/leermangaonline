import { useEffect, useState } from "react"
import React, { useRef } from 'react';
import { useContext } from "react";

import GraphicSeguidores from "../../Graphics/GraphicSeguidores"
import GraphicSubidas from "../../Graphics/GraphicSubidas"

import icon_user from "../../../img/panel/icon-user.svg"
import icon_up from "../../../img/panel/icon-up.svg"
import icon_check from "../../../img/panel/icon-check.svg"
import icon_times from "../../../img/panel/icon-times.svg"
import icon_close from "../../../img/panel/icon-close.svg"
import icon_bloc from "../../../img/panel/icon-bloc.svg"
import { useSeries } from "../../../hooks/useSeries";
import { useParams } from "react-router-dom";



const PanelControl = (props) => {
    const { miembros, proyectos } = props;
    const { solicitud, getTypeSolicitudes } = useSeries();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getTypeSolicitudes(id)
        }
    }, [])

    console.log(solicitud)
    return (
        <div className="panel-control">

            <div className="cont-control">
                <div className="titulo">
                    <h2>Panel de control</h2>
                </div>

                <div className="info-cards">

                    <div className="card">
                        <h4>Miembros</h4>
                        <div className="port">
                            <img src={icon_user} className="scal" />
                            <p className="number">{miembros?.length}</p>
                        </div>
                    </div>

                    <div className="card">
                        <h4>Subidas</h4>
                        <div className="port">
                            <img src={icon_up} />
                            <p className="number">{proyectos?.length}</p>
                        </div>
                    </div>

                    <div className="card">
                        <h4>Aceptadas</h4>
                        <div className="port">
                            <img src={icon_check} />
                            <p className="number">{solicitud?.aceptadas}</p>
                        </div>
                    </div>

                    <div className="card">
                        <h4>Pendientes</h4>
                        <div className="port">
                            <img src={icon_times} />
                            <p className="number">0</p>
                        </div>
                    </div>

                    <div className="card">
                        <h4>Rechazadas</h4>
                        <div className="port">
                            <img src={icon_close} className="scal" />
                            <p className="number">{solicitud?.rechazadas}</p>
                        </div>
                    </div>

                    <div className="card">
                        <h4>Bloqueadas</h4>
                        <div className="port">
                            <img src={icon_bloc} />
                            <p className="number">{solicitud?.bloqueadas}</p>
                        </div>
                    </div>
                </div>

                <h3 className="titulo-dt">datos generales de los proyectos</h3>
            </div>
            <div className="cont-graf">
                <GraphicSeguidores />
                <GraphicSubidas />
            </div>

            <div className="cont-graf info-reglas">
                <div className="info">
                    <div>
                        <h4>Subidas permitidas</h4>
                        <p>Solo se permiten subir manga, manhwa, manhua, doujinshi procedentes de Japon, korea y china.</p>
                    </div>
                    <div>
                        <h4>Subidas no permitidas</h4>
                        <p>Comic americanos o europeos.</p>
                        <p>Raws y obras originales sin traducir por fans.</p>
                        <p>No se permite editar o eliminar la hoja de créditos del scan original.</p>
                        <p>No se permiten subidas duplicadas, capítulos incompletos o capítulos duplicados con distinta numeración (Se considera duplicado cuando se trata del mismo capítulo y procedente del mismo scan.).</p>
                    </div>
                    <div>
                        <h4>Validacion de capitulos</h4>
                        <p>El tiempo de validación depende de la disponibilidad de los moderadores (entre 24 y 48 horas)</p>
                    </div>
                    <p className="ayuda">Si tienes alguna duda o pregunta sobre las publicaciones puedes ponerte en contacto con nosotros a través de nuestro formulario de contacto o correo electrónico.</p>
                </div>
            </div>

        </div>
    )
}

export default PanelControl;