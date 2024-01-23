import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react';

import useAuth from "../../hooks/useAuth";
import gruposContext from "../../context/grupos/gruposContext";

import CardGroups from "../Card/CardGroups";
import SearchGrupos from "../Search/SearchGrupos";

const ContainerGroupScans = (props) => {

    const { usuario } = useAuth();
    const { grupos, getAllGrupos } = useContext(gruposContext)

    useEffect(() => {
        getAllGrupos()
    }, [])

    const scans = [
        {nombre: 'KigdomScan', nmembers: 20, id: 0},
        {nombre: 'Spain Traductions', nmembers: 17, id: 1},
        {nombre: 'ComeScan', nmembers: 10, id: 2},
        {nombre: 'NoxionScanner', nmembers: 5, id: 3},
        {nombre: 'Letan Traductions', nmembers: 35, id: 4},
        {nombre: 'BluePhoenix Translations',nmembers: 31, id: 5},
        {nombre: 'RxNonstop Translations',nmembers: 27, id: 6},
        {nombre: 'Darkskin Scanner', nmembers: 16, id: 7}
    ]

    return (
        <div className="scan-groups">
            
            <div className="groups-content">
                <SearchGrupos/>
                <div className="groups">
                    {grupos?.map((scan, idx) => (<CardGroups key={idx} scan={scan}/>))}
                </div>
            </div>
        </div>
    )
}

export default ContainerGroupScans;