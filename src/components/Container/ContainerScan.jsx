import React, { useRef } from 'react';
import { useState, useContext, useEffect } from "react"

import routes from "../../helpers/routes";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

import useAuth from "../../hooks/useAuth";
import gruposContext from "../../context/grupos/gruposContext";

import TabsScan from "../Mui/Tabs/TabsScan";
import CardsScan from "../cards/CardsScan";
import FotoPerfil from "../../img/isugo.jpg";


const ContainerScan = (props) => {

    const { usuario } = useAuth();
    const { grupo, solicitudes, miembros, insertSolicitud, getMiembros } = useContext(gruposContext)
    const { enqueueSnackbar } = useSnackbar()

    const [ statusSl, setStatusSl ] = useState([]);

    useEffect(() => {
        // console.log(solicitudes, "linea 25", solicitudes?.find((item) => (item.grupoId === grupo.id && item.usuarioId === usuario.id)))
        if(usuario?.usuario){
            let stat = solicitudes?.find((item) => (item.grupoId === grupo.id && item.usuarioId === usuario.id));
            setStatusSl(stat ? stat : [])
        }
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
                    {nombre: "jujutsu Kaisen", categoria: "Manga", calif: "8.53", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.jpg"},
                    {nombre: "oshi no ko", categoria: "Manga", calif: "9.05", url: "https://otakuteca.com/images/books/cover/5efe4afd1d0c5.jpg"},
                    {nombre: "Kanojo, Okarishimasu", categoria: "Manga", calif: "3.91", url: "https://otakuteca.com/images/books/cover/606cda6f538c7.jpg"},
                    {nombre: "Class de 2 Banme ni...", categoria: "Manga", calif: "8.40", url: "https://otakuteca.com/images/books/cover/62e1dbb29f444.jpg"},
                    {nombre: "Kanan-sama Might be...", categoria: "Manga", calif: "8.92", url: "https://otakuteca.com/images/books/cover/629634d78ab1c.jpg"},
                    {nombre: "Senshitibu boi", categoria: "Manga", calif: "7.38", url: "https://otakuteca.com/images/books/cover/646dff10a1fa2.jpg"},
                    {nombre: "El mundo paralelo con...", categoria: "Manga", calif: "7.50", url: "https://otakuteca.com/images/books/cover/65010240f0a56.jpg"},
                    {nombre: "KINGDOW", categoria: "Manga", calif: "9.59", url: "https://otakuteca.com/images/books/cover/5bc121ab8e186.jpg"},
                    {nombre: "Isekai Ship Summoning", categoria: "Manga", calif: "9.00", url: "https://otakuteca.com/images/books/cover/61708df723eda.jpg"},
                    {nombre: "Yuusha Shoukan ni Ma", categoria: "Manga", calif: "8.54", url: "https://otakuteca.com/images/books/cover/5dbfb96f1ef61.jpg"},
                    {nombre: "Isekai Shoukan wa", categoria: "Manga", calif: "6.17", url: "https://otakuteca.com/images/books/cover/63813864eafb7.jpg"},
                    {nombre: "Kagurabachi", categoria: "Manga", calif: "6.71", url: "https://otakuteca.com/images/books/cover/65076987c0141.jpg"},
                    
                ]
            },
            {
                tab: "Añadidos recientemente",
                cards: [
                    {nombre: "Solo leveling", categoria: "manhwa", calif: "9.13", url: "https://otakuteca.com/images/books/cover/5c2efcd42cd5e.jpg"},
                    {nombre: "Maldita reencarnación", categoria: "manhwa", calif: "9.75", url: "https://otakuteca.com/images/books/cover/62b33f5a5c0f5.jpg"},
                    {nombre: "Registros de supervivenc...", categoria: "manhwa", calif: "8.78", url: "https://otakuteca.com/images/books/cover/61fbb5bf02e45.jpg"},
                    {nombre: "El dios de la escuela se...", categoria: "manhwa", calif: "8.78", url: "https://otakuteca.com/images/books/cover/5d3df9c5378b5.jpg"},
                    {nombre: "La vida despues de la muerte", categoria: "manhwa", calif: "8.89", url: "https://otakuteca.com/images/books/cover/5ddde8a92558c.jpg"},
                    {nombre: "Guerrero de nivelacion ha...", categoria: "manhwa", calif: "10.00", url: "https://otakuteca.com/images/books/cover/645feeabbf6ae.jpg"}
                ]
            },
            {
                tab: "Abandonados",
                cards: [
                    {nombre: "La era del gran diluvio", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/642cb67221a43.jpg"},
                    {nombre: "Song of the skywalkers", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/5d5fd8924ecb7.jpg"},
                    {nombre: "Super human era", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/5fe9c73717852.jpg"},
                    {nombre: "Mis discipulas son todas in...", categoria: "manhua", calif: "7.71", url: "https://otakuteca.com/images/books/cover/5fbb1b741ba61.jpg"},
                    {nombre: "Comienzo de la era humana", categoria: "manhua", calif: "0.00", url: "https://otakuteca.com/images/books/cover/5f4ad3371b22a.jpg"},
                    {nombre: "¿Mi esposa es en realidad ...", categoria: "manhua", calif: "7.50", url: "https://otakuteca.com/images/books/cover/602a535b9f308.jpg"}
                ]
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
                <TabsScan items={items}>
                    <div className="members">
                        <div className="member-titles">
                            <h2>Miembros</h2>
                            
                            { 
                            statusSl.length !== 0 
                            ? statusSl.estado === 0 
                                ? <button className="btn-req-member">Solicitud Realizada</button> 
                                : statusSl.estado === 1 ? <button className="btn-req-member">Gestionar</button> : null
                            : <button onClick={handleSolicitud} className="btn-req-member">Solicitar ingreso</button> 
                            }
                        </div>
                        
                        <div className="member-cards">
                            {miembros?.map((miembro) => (<CardsScan key={miembro.id} miembro={miembro}/>))}
                        </div>
                    </div>
                </TabsScan>
                
            </div>
        </div>
    )
}

export default ContainerScan;