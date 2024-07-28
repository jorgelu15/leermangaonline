import { useEffect, useState } from "react"
import React, { useRef } from 'react';

import TableSolicitudes from "../../Mui/Tables/TableSolicitudes";
import SearchSolicitudes from "../../Search/SearchMiembros";
import { useGrupos } from "../../../hooks/useGrupos";
import { useParams } from "react-router-dom";


const PanelSolicitudes = (props) => {

    const { solicitudes, getSolicitudes } = useGrupos();
    const [filterSolic, setFilterSolic] = useState(solicitudes)
    let { id } = useParams();
    useEffect(() => {
        if (id) {
            getSolicitudes(id);
        }
    }, [])

    useEffect(() => {
    }, [filterSolic])


    return (
        <div className="panel-miembros">
            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Solicitudes</h2>
                    {/* <p>Solicitudes pendientes: {filterSolic ? filterSolic.length : 0}</p> */}
                </div>
                <div className="c-table">
                    <SearchSolicitudes />

                    {filterSolic ? filterSolic.length !== 0 ? <TableSolicitudes solicitudesV={filterSolic}></TableSolicitudes>
                        : <p className="mensaje">No hay solicitudes pendientes.</p> :
                        <p className="mensaje">No hay solicitudes pendientes.</p>
                    }
                </div>
            </div>

        </div>
    )
}

export default PanelSolicitudes;