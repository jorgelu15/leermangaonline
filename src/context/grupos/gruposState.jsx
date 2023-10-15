import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import GruposContext from './gruposContext';
import GruposReducer from './gruposReducer';

import {
    INSERTAR_GRUPO_EXITOSO,
    REGISTRO_GRUPO_ERROR,
} from '../../types';

const GruposState = props => {

    const initialState = {
        grupo: null,
        grupos: null,
        msg: null
    }

    const [state, dispatch] = useReducer(GruposReducer, initialState);


    const insertGrupo = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/grupo/add/', datos);
            dispatch({
                type: INSERTAR_GRUPO_EXITOSO,
                payload: respuesta.data
            })
        } catch (error) {
  
            dispatch({
                type: REGISTRO_GRUPO_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return (
        <GruposContext.Provider
            value={{
                grupo: state.grupo,
                grupos: state.grupos,
                msg: state.msg,
                insertGrupo,
            }}
        >
            {props.children}
        </GruposContext.Provider>
    )
}

export default GruposState;