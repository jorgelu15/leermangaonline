import React, { useRef } from 'react';
import { useState, useContext, useEffect } from "react"

import routes from "../../helpers/routes";
import { Link, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import { useAuth } from "../../hooks/useAuth";
import gruposContext from "../../context/grupos/gruposContext";

import TabsScan from "../Mui/Tabs/TabsScan";
import FotoPerfil from "../../img/isugo.jpg";
import CardScan from '../Card/CardScan';
import { useGrupos } from '../../hooks/useGrupos';
import { useText } from '../../hooks/useText';


const ContainerScan = (props) => {

    const { usuario } = useAuth();
    const { proyectos, grupo, solicitud, miembros, insertSolicitud, getMiembros, getGrupo, getSolicitudes, getSolicitud, getProyectos } = useGrupos();
    const { enqueueSnackbar } = useSnackbar()

    let { id_grupo } = useParams();

    useEffect(() => {
        if (id_grupo) {
            getMiembros(id_grupo);
        }
    }, [id_grupo])

    useEffect(() => {
        if (id_grupo) {
            getGrupo(id_grupo);
        }
    }, []);

    useEffect(() => {
        if (usuario) {
            getSolicitud(usuario?.id);
        }
    }, [usuario])

    useEffect(() => {
        if (id_grupo) {
            getProyectos(id_grupo)
        }
    }, [id_grupo])

    const handleSolicitud = (e) => {
        e.preventDefault();

        enqueueSnackbar("Solicitud Enviada", {
            variant: "success",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            }
        })

        insertSolicitud({ id_usuario: usuario?.id, id_grupo: grupo?.id, status: 1 })
    }


    const items = {
        tabs: 1,
        cont: [
            {
                tab: "Añadidos recientemente",
                cards: proyectos
            }
        ]
    }

    return (
        <div className="cont-scan">
            <div className="scan-port">
                <div className="background"></div>
                <div className="wallpaper"></div>
                <div className="cont-portada">
                    <div className="img">
                        <div className="type-scan">Scanlation</div>
                        <img src={FotoPerfil} alt="scanProfile" />
                        <button style={{ padding: 10, width: "90%", backgroundColor: "#7bb9ff", border: "none", borderRadius: 3, fontWeight: "700", textTransform: "uppercase" }}>Seguir</button>
                    </div>
                    <div className="info">
                        <div className="etiq-cards">
                            <h4 style={{ textTransform: "capitalize" }}>{grupo?.nombre}</h4>
                        </div>
                        <div className="desc-scan">
                            <p>{grupo?.descripcion}</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="scan-content">
                <TabsScan items={items}>
                    <div className="members">
                        <div className="member-titles">
                            <h2>Miembros</h2>
                            {String(grupo?.usuarioId) === String(usuario?.id) ? (
                                null
                            ) : solicitud?.status === 1 ? (
                                (
                                    <button className="btn-req-member">Solicitud Enviada</button>
                                )
                            ) : solicitud?.status === 2 ? (
                                <button className="btn-req-member">Solicitud rechazada</button>
                            ) : (
                                <button onClick={handleSolicitud} className="btn-req-member">Solicitar ingreso</button>
                            )}

                        </div>

                        <div className="member-cards">
                            {miembros?.map((miembro, idx) => (<CardScan key={idx} miembro={miembro} />))}
                        </div>
                    </div>
                </TabsScan>

            </div>
        </div>
    )
}

export default ContainerScan;