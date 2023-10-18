import * as React from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import routes from "../../helpers/routes";
import gruposContext from '../../context/grupos/gruposContext';


export default function CardGroups(props){

    const {
        scan
    } = props;

    const { getGrupo } = useContext(gruposContext)
    const { enqueueSnackbar } = useSnackbar()

    let navigate = useNavigate();


    const handleClick = async () => {

        await getGrupo(scan)
        navigate(routes.scanlation)
    }

    return(
        <div onClick={handleClick} className='card'>
            <div className='desc-card-scan'>
                <p>{scan.nombre}</p>
                <p>{scan.estado}</p>
            </div>
        </div>
    );
}