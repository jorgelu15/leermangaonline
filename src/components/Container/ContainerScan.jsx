import { useState } from "react"
import React, { useRef } from 'react';

import FotoPerfil from "../../img/fotoperfil.jpg";
import TabsScan from "../Mui/Tabs/TabsScan";
import CardsScan from "../cards/CardsScan";

const ContainerScan = (props) => {

    const [ viewScan, setViewScan ] = useState(false)

    const changeViewPr = () => {
        setViewScan(!viewScan)
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
                            <div className="card">2023-04-11</div>
                            <div className="card">Colombia</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scan-content">
                <TabsScan items={items} viewScan={viewScan} setViewScan={setViewScan}></TabsScan>
                <div className="members">
                    <h2>Miembros</h2>
                    <button className= "btn-scan">solicitar ingreso</button>
                    <div className="member-cards">
                        {members.map((member) => (<CardsScan key={member.id} member={member}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerScan;