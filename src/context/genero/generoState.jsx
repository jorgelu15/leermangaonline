import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';


import GeneroContext from './generoContext';
import GeneroReducer from './generoReducer';

import {
    OBTENER_GENEROS,
    OBTENER_GENERO,
    SUBIR_GENERO,
} from '../../types';

const GeneroState = props => {

    const initialState = {
        msg: null,
        genero: null,
        generos: null
    }

    const [state, dispatch] = useReducer(GeneroReducer, initialState);

    const subirGenero = async (file) => {
        try {
            const respuesta = await clienteAxios.post(`/genero`);
            // console.log(respuesta);
    
            dispatch({
                type: SUBIR_GENERO,
                payload: respuesta.data
            })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getGeneros = async () => {
        try {
            const res = await clienteAxios.get(`/genero`)

            dispatch({
                type: OBTENER_GENEROS,
                payload: res.data.generos
            })
        } catch (error) {
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getGenero = async (genero_uid) => {
        try {
            const res = await clienteAxios.get(`/genero/${genero_uid}`);

            dispatch({
                type: OBTENER_GENERO,
                payload: res.data
            })
        } catch (error) {
            
        }
    }

    return (
        <GeneroContext.Provider
            value={{
                msg: state.msg,
                genero: state.genero,
                generos: state.generos,
                getGeneros,
                getGenero,
                subirGenero,
            }}
        >
            {props.children}
        </GeneroContext.Provider>
    )
}

export default GeneroState;