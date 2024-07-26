import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';

import { useAuth } from "../../hooks/useAuth";
import gruposContext from "../../context/grupos/gruposContext";

import CardGroups from "../Card/CardGroups";
import SearchGrupos from "../Search/SearchGrupos";

const ContainerGroupScans = (props) => {

    const { grupos, getAllGrupos } = useContext(gruposContext)
    
    useEffect(() => {
        getAllGrupos()
    }, [])

    return (
        <div className="scan-groups">

            <div className="groups-content">
                <SearchGrupos />
                <div className="groups">
                    {grupos?.map((scan, idx) => (<CardGroups key={idx} scan={scan} />))}
                </div>
            </div>
        </div>
    )
}

export default ContainerGroupScans;