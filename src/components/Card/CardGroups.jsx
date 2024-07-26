import * as React from 'react';
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import routes from "../../helpers/routes";
import gruposContext from '../../context/grupos/gruposContext';

import userimg from '../../img/group-users.svg'

export default function CardGroups(props){

    const {
        scan
    } = props;

    return(
        <Link to={routes.scanlation+`/${scan.id}`} className='card'>
            <div className='desc-card-scan'>
                <p>{scan.nombre}</p>
                <p><img src={userimg} />{scan.estado}</p>
            </div>
        </Link>
    );
}