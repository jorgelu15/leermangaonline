import * as React from 'react';

export default function CardsGroups(scan){
    return(
        <div className='card'>
            <div className='desc-card-scan'>
                <p>{scan.scan.nombre}</p>
                <p>{scan.scan.nmembers}</p>
            </div>
        </div>
    );
}