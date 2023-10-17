import { useState } from "react"
import React, { useRef } from 'react';

import TableMiembros from "../../Mui/Tables/TableMiembros";
import TableSolicitudes from "../../Mui/Tables/TableSolicitudes";



const PanelMiembros = (props) => {

    return (
        <div className="panel-miembros">

            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Miembros</h2>
                    <p>Miembros totales: 12</p>
                </div>
                <div className="c-table">
                    <TableMiembros></TableMiembros>
                </div>
            </div>

            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Solicitudes</h2>
                    <p>Solicitudes pendientes: 12</p>
                </div>
                <div className="c-table">
                    <TableSolicitudes></TableSolicitudes>
                </div>
            </div>
    
        </div>
    )
}

export default PanelMiembros;