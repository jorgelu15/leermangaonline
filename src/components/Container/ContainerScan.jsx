import React, { useRef } from 'react';
import { useState, useContext, useEffect } from "react"

import routes from "../../helpers/routes";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

import useAuth from "../../hooks/useAuth";
import gruposContext from "../../context/grupos/gruposContext";

import TabsScan from "../Mui/Tabs/TabsScan";
import CardsScan from "../cards/CardsScan";
import FotoPerfil from "../../img/fotoperfil.jpg";


const ContainerScan = (props) => {

    const { usuario } = useAuth();
    const { grupo, solicitudes, miembros, insertSolicitud, getMiembros } = useContext(gruposContext)
    const { enqueueSnackbar } = useSnackbar()

    const [ statusSl, setStatusSl ] = useState([]);

    useEffect(() => {
        // console.log(solicitudes, "linea 25", solicitudes?.find((item) => (item.grupoId === grupo.id && item.usuarioId === usuario.id)))
        let stat = solicitudes?.find((item) => (item.grupoId === grupo.id && item.usuarioId === usuario.id));
        setStatusSl(stat ? stat : [])

        getMiembros()
    }, [solicitudes])


    const handleSolicitud = (e) => {
        e.preventDefault();

        if (statusSl.length === 0) {
            enqueueSnackbar("Solicitud Enviada", {
                variant: "success",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            })

            insertSolicitud({usuarioId: usuario?.id, grupoId: grupo?.id})
        }
    }

    const items = {
        tabs: 3,
        cont: [
            {
                tab: "Populares",
                cards: [
                    {nombre: "jujutsu", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "jujutsu", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "jujutsu", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"}
                    
                ]
            },
            {
                tab: "Añadidos recientemente",
                cards: [
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"}
                ]
            },
            {
                tab: "Abandonados",
                cards: [
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"},
                    {nombre: "oshi no ko", categoria: "manga", calif: "8.0", url: "img"}
                ]
            },
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
                    </div>
                    <div className="info">
                        <div className="etiq-cards">
                            <h4>{grupo?.nombre}</h4>
                        </div>
                        <div className="desc-scan">
                            <p>{grupo?.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scan-content">
                <TabsScan items={items}></TabsScan>
                <div className="members">
                    
                    <h2>Miembros</h2>
                    {/* { console.log(statusSl, "linea 117")} */}
                    { 
                    statusSl.length !== 0 
                    ? statusSl.estado === 0 
                        ? <button className="btn-req-member">Solicitud Realizada</button> 
                        : statusSl.estado === 1 ? <button className="btn-req-member">Gestionar</button> : null
                    : <button onClick={handleSolicitud} className="btn-req-member">Solicitar ingreso</button> 
                    }
                    
                    <div className="member-cards">
                        {miembros?.map((miembro) => (<CardsScan key={miembro.id} miembro={miembro}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerScan;