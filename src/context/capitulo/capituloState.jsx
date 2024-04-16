import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import CapituloContext from './capituloContext';
import CapituloReducer from './capituloReducer';

import {
    
} from '../../types';

const CapituloState = props => {

    const initialState = {
        msg: null,
    }

    const [state, dispatch] = useReducer(CapituloReducer, initialState);

    const subirCapitulo = async (file) => {
        try {
            // const respuesta = await clienteAxios.post(`/serie`, file);
            // console.log(respuesta);
            const respuesta2 = await clienteAxiosUpload.post(`/uploadCapitulo`, file);
            // dispatch({
            //     type: SUBIR_SERIE,
            //     payload: respuesta.data.perfil
            // })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return (
        <CapituloContext.Provider
            value={{
                msg: state.msg,
                subirCapitulo
            }}
        >
            {props.children}
        </CapituloContext.Provider>
    )
}

export default CapituloState;