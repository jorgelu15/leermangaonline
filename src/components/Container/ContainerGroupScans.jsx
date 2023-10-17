import { useState } from "react"
import React, { useRef } from 'react';

import CardsGroups from "../cards/CardsGroups";

const ContainerGroupScans = (props) => {

    const scans = [
        {nombre:'KigdomScan',nmembers:20, id:0},
        {nombre:'Spain Traductions',nmembers:17,id:1},
        {nombre:'ComeScan',nmembers:10,id:2},
        {nombre:'NoxionScanner',nmembers:5, id:3},
        {nombre:'Letan Traductions',nmembers:35,id:4},
        {nombre:'BluePhoenix Translations',nmembers:31,id:5},
        {nombre:'RxNonstop Translations',nmembers:27,id:6},
        {nombre:'Darkskin Scanner',nmembers:16,id:7}
    ]

    return (
        <div className="scan-groups">
            <div className="query">
                <input type="text" className="group-query"/>
                <button>search</button>
            </div>
            <div className="groups-content">
                <div className="groups">
                    {scans.map((scan) => (<CardsGroups key={scan.id} scan={scan}/>))}
                </div>
            </div>
        </div>
    )
}

export default ContainerGroupScans;