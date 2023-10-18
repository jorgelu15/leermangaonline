import { useEffect, useState } from "react"
import React, { useRef } from 'react';
import { useContext } from "react";

import TableSolicitudes from "../../Mui/Tables/TableSolicitudes";

import gruposContext from "../../../context/grupos/gruposContext";


const PanelSolicitudes = (props) => {

    const { solicitudes } = useContext(gruposContext)
    const [ filterSolic, setFilterSolic ] = useState([])

    useEffect(() => {
        setFilterSolic(solicitudes?.filter((item) => item.estado === 0))
        // console.log(solicitudes?.filter((item) => item.estado === 0), "17 linea")
    }, [solicitudes])

    useEffect(() => {
    }, [filterSolic])


    return (
        <div className="panel-miembros">

            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Solicitudes</h2>
                    <p>Solicitudes pendientes: {filterSolic ? filterSolic.length : 0}</p>
                </div>
                <div className="c-table">
                    {filterSolic.length !== 0 ? <TableSolicitudes solicitudesV={filterSolic}></TableSolicitudes> 
                    : <p className="mensaje">No hay solicitudes pendientes.</p>}
                </div>
            </div>
    
        </div>
    )
}

export default PanelSolicitudes;