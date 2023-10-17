import { useState, useContext, useEffect } from "react"
import React, { useRef } from 'react';

import FotoPerfil from "../../img/fotoperfil.jpg";
import routes from "../../helpers/routes";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

import useAuth from "../../hooks/useAuth";
import gruposContext from "../../context/grupos/gruposContext";

import TabsScan from "../Mui/Tabs/TabsScan";
import CardsScan from "../cards/CardsScan";


const ContainerScan = (props) => {

    
    const { usuario } = useAuth();
    const { grupo, solicitud, insertSolicitud } = useContext(gruposContext)
    const { enqueueSnackbar } = useSnackbar()

    const [ statusSl, setStatusSl ] = useState(false);

    useEffect(() => {

        // console.log(solicitud?.id_grupo, grupo?.id_grupo, "linea 27")
        // console.log(solicitud?.id_usuario, usuario?.id_usuario, "linea 28")
        
        if(solicitud != null){
            setStatusSl((solicitud?.id_grupo === grupo?.id_grupo &&
                solicitud?.id_usuario === usuario?.id_usuario))
        }

        // console.log((solicitud?.id_grupo !== grupo?.id_grupo &&
        //     solicitud?.id_usuario !== usuario?.id_usuario), "linea 32")
    }, [solicitud])

    useEffect(() => {
    }, [statusSl])

    const handleSolicitud = (e) => {
        e.preventDefault();

        if (!statusSl) {
            enqueueSnackbar("Solicitud Enviada", {
                variant: "success",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            })

            insertSolicitud({id_usuario: usuario?.id_usuario, id_grupo: grupo?.id_grupo})
            // console.log(solicitud, "linea 45")
        }
    }
    


    const items = {
        tabs: 3,
        cont: [
            {
                tab: "Populares",
                cards: [
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

    const members = [
        {nombre:'DgDavid21',rol:'Creador del scan', id:0},
        {nombre:'SergioLeon25',rol:'Segundo al mando',id:1},
        {nombre:'Kuroro',rol:'Traductor',id:2},
        {nombre:'Noxion',rol:'Traductor', id:3},
        {nombre:'Letan',rol:'Traductor',id:4},
        {nombre:'BluePhoenix',rol:'Traductor',id:5},
        {nombre:'RxNonstop',rol:'Traductor',id:6},
        {nombre:'Darkskin',rol:'Traductor',id:7}
    ]

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
                    </div>
                </div>
            </div>

            <div className="scan-content">
                <TabsScan items={items}></TabsScan>
                <div className="members">
                    <h2>Miembros</h2>
                    { usuario?.id_usuario !== grupo?.id_usuario ?   
                        statusSl ? <button className="btn-scan">Solicitud Realizada</button> 
                                 : <button onClick={handleSolicitud} className="btn-scan">Solicitar ingreso</button> 
                    : <button className="btn-scan">Gestionar</button>
                    }
                    
                    <div className="member-cards">
                        {members.map((member) => (<CardsScan key={member.id} member={member}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerScan;