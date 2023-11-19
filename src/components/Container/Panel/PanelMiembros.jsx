import { useEffect, useState } from "react"
import React, { useRef } from 'react';
import { useContext } from "react";

import TableMiembros from "../../Mui/Tables/TableMiembros";

import gruposContext from "../../../context/grupos/gruposContext";
import SearchMiembros from "../../Search/SearchMiembros";


const PanelMiembros = (props) => {

    const { solicitudes } = useContext(gruposContext)
    const [ filterSolic, setFilterSolic ] = useState([])

    useEffect(() => {
        setFilterSolic(solicitudes?.filter((item) => item.estado === 1))
    }, [solicitudes])

    useEffect(() => {
    }, [filterSolic])

    return (
        <div className="panel-miembros">

            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Miembros</h2>
                    {/* <p>Miembros totales: {filterSolic ? filterSolic.length : 0}</p> */}
                </div>

                <div className="c-table">
                    <SearchMiembros ></SearchMiembros>

                    {filterSolic.length !== 0 ? <TableMiembros solicitudesV={filterSolic}></TableMiembros>
                    : <p className="mensaje">No hay miembros.</p>}
                </div>
            </div>
    
        </div>
    )
}

export default PanelMiembros;